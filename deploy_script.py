
import sys
import os
import json
import time

# Add local libs to path
sys.path.append(os.path.join(os.getcwd(), 'libs'))

try:
    import paramiko
except ImportError as e:
    print(f"Failed to import paramiko: {e}")
    sys.exit(1)

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'
DOMAIN_NAME = 'property-tools.online'
ZIP_FILE = 'deploy.zip'

def deploy():
    print(f"Connecting to {HOSTNAME}...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
        print("Connected.")
    except Exception as e:
        print(f"Connection failed: {e}")
        return

    # 1. Find the target folder
    print(f"Searching for folder with name '{DOMAIN_NAME}'...")
    stdin, stdout, stderr = client.exec_command(f"find /var/www /home /root -name '{DOMAIN_NAME}' -type d 2>/dev/null")
    output = stdout.read().decode().strip()
    found_paths = [p for p in output.split('\n') if p]
    
    print(f"Found paths: {found_paths}")
    
    if not found_paths:
        print("Could not find a directory for the domain locally.")
        # Try looser search?
        stdin, stdout, stderr = client.exec_command(f"find /var/www -maxdepth 2 -type d")
        all_dirs = stdout.read().decode().strip().split('\n')
        # simple fuzzy match
        matches = [d for d in all_dirs if DOMAIN_NAME in d]
        if matches:
            found_paths = matches
            print(f"Found looser matches: {found_paths}")
    
    if not found_paths:
        print("ERROR: Target directory not found on VPS.")
        return

    # Pick the best one. Prefer /var/www/
    target_path = found_paths[0]
    for p in found_paths:
        if "/var/www" in p:
            target_path = p
            break
            
    print(f"Deploying to: {target_path}")

    # 2. Upload Zip
    ftp = client.open_sftp()
    remote_zip = f"{target_path}/{ZIP_FILE}"
    
    print(f"Uploading {ZIP_FILE} to {remote_zip}...")
    # Progress callback
    def progress(transferred, total):
        pass # print(f"{transferred}/{total}", end='\r')
        
    try:
        ftp.put(ZIP_FILE, remote_zip, callback=progress)
        print("\nUpload complete.")
    except Exception as e:
        print(f"Upload failed: {e}")
        ftp.close()
        client.close()
        return
        
    ftp.close()

    # 3. Setup Environment
    print("Checking Node environment...")
    stdin, stdout, stderr = client.exec_command("node -v")
    node_ver = stdout.read().decode().strip()
    print(f"Node version: {node_ver}")
    
    if not node_ver:
        print("Node.js not found. Attempting to install via NVM or generic (this might fail if non-interactive)...")
        # Try checking if nvm is there but not in path?
        # For now, abort if node is missing, safer than breaking system.
        print("Please install Node.js on the VPS.")
        client.close()
        return

    # Check unzip
    stdin, stdout, stderr = client.exec_command("unzip -v")
    if "UnZip" not in stdout.read().decode():
        print("Installing unzip...")
        client.exec_command("apt-get update && apt-get install -y unzip")

    # 4. Unzip and Build
    print("Unzipping and building...")
    
    # We remove old files (excluding .env maybe? user didn't mention .env)
    # But user said "don't touch OTHER sites".
    # Inside this folder, we can refresh.
    # Safe approach: unzip -o (overwrite).
    
    cmds = [
        f"cd {target_path}",
        f"unzip -o {ZIP_FILE}",
        f"rm {ZIP_FILE}",
        "npm install",
        "npm run build"
    ]
    
    full_cmd = " && ".join(cmds)
    print(f"Executing: {full_cmd}")
    
    stdin, stdout, stderr = client.exec_command(full_cmd)
    
    # Read output loop
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            print(stdout.channel.recv(1024).decode(), end="")
        if stderr.channel.recv_ready():
            print(stderr.channel.recv(1024).decode(), end="")
        time.sleep(0.1)
    
    print("\nBuild commands finished.")
    if stdout.channel.recv_exit_status() != 0:
        print("Build failed!")
        client.close()
        return

    # 5. PM2 Management
    print("Managing PM2 process...")
    stdin, stdout, stderr = client.exec_command("pm2 -v")
    pm2_ver = stdout.read().decode().strip()
    
    if pm2_ver:
        print(f"PM2 version: {pm2_ver}")
        
        # Check running processes
        stdin, stdout, stderr = client.exec_command("pm2 jlist")
        proc_list_str = stdout.read().decode()
        
        app_name = "property-tools-online" # Safe name
        # Also check exact domain name
        
        found_id_or_name = None
        
        try:
            procs = json.loads(proc_list_str)
            for p in procs:
                if p['name'] == app_name or p['name'] == DOMAIN_NAME:
                    found_id_or_name = p['name']
                    break
        except:
            pass

        if found_id_or_name:
            print(f"Restarting existing process: {found_id_or_name}")
            client.exec_command(f"pm2 restart {found_id_or_name}")
        else:
            print(f"Starting new process: {app_name}")
            # Ensure we are in the dir
            start_cmd = f"cd {target_path} && pm2 start npm --name '{app_name}' -- start"
            print(f"Run: {start_cmd}")
            client.exec_command(start_cmd)
            client.exec_command("pm2 save")
            
    else:
        print("PM2 not found. Attempting to start with npm start (might not persist)...")
        # Warn user
        print("WARNING: PM2 not installed. Using nohup...")
        client.exec_command(f"cd {target_path} && nohup npm start > app.log 2>&1 &")

    print("Deployment finished successfully.")
    client.close()

if __name__ == "__main__":
    deploy()
