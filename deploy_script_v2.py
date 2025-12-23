
import sys
import os
import json
import time

# Fix encoding for Windows console
sys.stdout.reconfigure(encoding='utf-8')

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

    # 1. Find the target folder (Assuming we know it from previous run: /var/www/property-tools.online)
    target_path = "/var/www/property-tools.online"
    
    # Verify it exists
    stdin, stdout, stderr = client.exec_command(f"ls -d {target_path}")
    if target_path not in stdout.read().decode():
        print(f"Target path {target_path} not found. Searching again...")
        stdin, stdout, stderr = client.exec_command(f"find /var/www /home /root -name '{DOMAIN_NAME}' -type d 2>/dev/null")
        paths = stdout.read().decode().strip().split('\n')
        if paths and paths[0]:
            target_path = paths[0]
        else:
            print("Target folder not found!")
            return

    print(f"Deploying to: {target_path}")

    # 2. Upload Zip
    ftp = client.open_sftp()
    remote_zip = f"{target_path}/{ZIP_FILE}"
    
    print(f"Uploading {ZIP_FILE} to {remote_zip}...")
    try:
        ftp.put(ZIP_FILE, remote_zip)
        print("Upload complete.")
    except Exception as e:
        print(f"Upload failed: {e}")
        return
    ftp.close()

    # 3. Unzip and Build
    print("Unzipping and building...")
    
    # unzip -q for quiet
    cmds = [
        f"cd {target_path}",
        f"unzip -o -q {ZIP_FILE}",
        f"rm {ZIP_FILE}",
        "npm install",
        "npm run build"
    ]
    
    full_cmd = " && ".join(cmds)
    print(f"Executing: {full_cmd}")
    
    stdin, stdout, stderr = client.exec_command(full_cmd)
    
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            try:
                print(stdout.channel.recv(1024).decode('utf-8', errors='replace'), end="")
            except Exception:
                pass
        if stderr.channel.recv_ready():
            try:
                print(stderr.channel.recv(1024).decode('utf-8', errors='replace'), end="")
            except Exception:
                pass
        time.sleep(0.1)
    
    print("\nBuild commands finished.")
    exit_status = stdout.channel.recv_exit_status()
    if exit_status != 0:
        print(f"Build failed with exit code {exit_status}!")
        # Print remaining stderr
        print(stderr.read().decode('utf-8', errors='replace'))
        client.close()
        return

    # 4. PM2 Management
    print("Managing PM2 process...")
    stdin, stdout, stderr = client.exec_command("pm2 -v")
    pm2_ver = stdout.read().decode().strip()
    
    if pm2_ver:
        # Check running processes
        stdin, stdout, stderr = client.exec_command("pm2 jlist")
        proc_list_str = stdout.read().decode()
        
        app_name = "property-tools-online" 
        
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
            start_cmd = f"cd {target_path} && pm2 start npm --name '{app_name}' -- start"
            client.exec_command(start_cmd)
            client.exec_command("pm2 save")
            
    else:
        print("PM2 not found. Using nohup...")
        client.exec_command(f"cd {target_path} && nohup npm start > app.log 2>&1 &")

    print("Deployment finished successfully.")
    client.close()

if __name__ == "__main__":
    deploy()
