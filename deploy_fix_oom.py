
import sys
import os
import json
import time

# Fix encoding
sys.stdout.reconfigure(encoding='utf-8')

# Add libs
sys.path.append(os.path.join(os.getcwd(), 'libs'))

try:
    import paramiko
except ImportError:
    sys.exit(1)

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'
DOMAIN_NAME = 'property-tools.online'
ZIP_FILE = 'deploy.zip'

def run_command(client, cmd, print_output=True):
    print(f"Running: {cmd}")
    stdin, stdout, stderr = client.exec_command(cmd)
    
    out_log = ""
    err_log = ""
    
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            chunk = stdout.channel.recv(1024).decode('utf-8', errors='replace')
            if print_output: print(chunk, end="")
            out_log += chunk
        if stderr.channel.recv_ready():
            chunk = stderr.channel.recv(1024).decode('utf-8', errors='replace')
            if print_output: print(chunk, end="")
            err_log += chunk
        time.sleep(0.1)
    
    # helper for exit code
    exit_code = stdout.channel.recv_exit_status()
    if exit_code != 0:
        print(f"\nCommand failed with exit code {exit_code}")
    return exit_code, out_log

def deploy():
    print(f"Initializing SSH Client...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    # Retry logic for connection (Wait for reboot)
    max_retries = 30
    retry_delay = 10
    
    print(f"Waiting for server to come online ({max_retries * retry_delay}s max)...")
    
    for attempt in range(max_retries):
        try:
            print(f"Connecting to {HOSTNAME} (Attempt {attempt+1}/{max_retries})...")
            client.connect(HOSTNAME, username=USERNAME, password=PASSWORD, timeout=10)
            print("Connected successfully!")
            break
        except Exception as e:
            # print(f"Connection failed: {e}") # Reduce noise
            print(".", end="", flush=True)
            if attempt < max_retries - 1:
                time.sleep(retry_delay)
            else:
                print(f"\nMax retries reached. Could not connect to {HOSTNAME}.")
                print(f"Last error: {e}")
                return

    # 0. Check and Add Swap
    print("Checking Swap...")
    exit_code, output = run_command(client, "free -h", print_output=True)
    
    # Check if swap is active
    _, swap_out = run_command(client, "swapon --show", print_output=False)
    if not swap_out.strip():
        print("No swap detected. Adding 2GB swap file...")
        # create swap
        cmds = [
            "fallocate -l 2G /swapfile",
            "chmod 600 /swapfile",
            "mkswap /swapfile",
            "swapon /swapfile",
            "echo '/swapfile none swap sw 0 0' >> /etc/fstab" # Append only if not there? Risk of duplicates.
        ]
        # Check fstab first?
        _, fstab = run_command(client, "cat /etc/fstab", print_output=False)
        if "/swapfile" not in fstab:
            full_swap_cmd = " && ".join(cmds)
        else:
            # Skip fstab append
            full_swap_cmd = " && ".join(cmds[:-1])
            
        exit_code, _ = run_command(client, full_swap_cmd)
        if exit_code != 0:
            print("Failed to add swap. Attempting to generate anyway (fallocate might fail on some FS). Using dd...")
            # Fallback for fallocate failure
            run_command(client, "dd if=/dev/zero of=/swapfile bs=1024 count=2097152")
            run_command(client, "chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile")
            
        print("Swap added.")
        run_command(client, "free -h")
    else:
        print("Swap already exists.")

    # 1. Find target
    target_path = "/var/www/property-tools.online"
    # Verify
    ec, _ = run_command(client, f"ls -d {target_path}", print_output=False)
    if ec != 0:
        print("Finding folder...")
        ec, out = run_command(client, f"find /var/www /home /root -name '{DOMAIN_NAME}' -type d 2>/dev/null", print_output=False)
        paths = out.strip().split('\n')
        if paths and paths[0]:
            target_path = paths[0].strip()
        else:
            print("Folder not found!")
            return

    print(f"Target: {target_path}")

    # 2. Skip Upload/Unzip if we just want to rebuild? 
    # The previous attempt failed at build. Files ARE there (unzipped).
    # But maybe incomplete?
    # Safer to just re-unzip? 
    # No, zip file was deleted: `rm deploy.zip`.
    # So I MUST upload again.
    
    ftp = client.open_sftp()
    remote_zip = f"{target_path}/{ZIP_FILE}"
    print(f"Uploading {ZIP_FILE}...")
    ftp.put(ZIP_FILE, remote_zip)
    print("Uploaded.")
    ftp.close()

    # 3. Unzip + Install + Build
    # We can try to skip install if node_modules OK, but OOM might have left it weird.
    # npm install is usually safe to rerun.
    
    # Unzip, rm zip, npm install, build
    
    build_cmd = f"cd {target_path} && unzip -o -q {ZIP_FILE} && rm {ZIP_FILE} && npm install && npm run build"
    
    print("Starting Build Process...")
    ec, _ = run_command(client, build_cmd)
    
    if ec != 0:
        print("Build FAILED again.")
        client.close()
        return

    # 4. PM2
    print("Updating PM2...")
    ec, pm2_v = run_command(client, "pm2 -v", print_output=False)
    if not pm2_v.strip():
        print("PM2 not found.")
        # Try start script
        run_command(client, f"cd {target_path} && nohup npm start > app.log 2>&1 &")
    else:
        # Check process
        _, jlist = run_command(client, "pm2 jlist", print_output=False)
        
        app_name = "property-tools-online"
        target_name = None
        try:
            procs = json.loads(jlist)
            for p in procs:
                if p['name'] == app_name or p['name'] == DOMAIN_NAME:
                    target_name = p['name']
        except:
            pass
            
        if target_name:
            run_command(client, f"pm2 restart {target_name}")
        else:
            run_command(client, f"cd {target_path} && pm2 start npm --name '{app_name}' -- start && pm2 save")

    print("Success!")
    client.close()

if __name__ == "__main__":
    deploy()
