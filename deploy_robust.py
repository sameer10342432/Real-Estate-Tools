
import sys
import os
import time
import json

# Fix encoding
sys.stdout.reconfigure(encoding='utf-8')

# Add libs
sys.path.append(os.path.join(os.getcwd(), 'libs'))

try:
    import paramiko
except ImportError:
    print("Paramiko not found")
    sys.exit(1)

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'
DOMAIN_NAME = 'property-tools.online'
ZIP_FILE = 'deploy.zip'
TARGET_PATH = '/var/www/property-tools.online'

def run_command(client, cmd, print_output=True, ignore_error=False):
    print(f"\n[REMOTE] {cmd}")
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
    
    exit_code = stdout.channel.recv_exit_status()
    if exit_code != 0 and not ignore_error:
        print(f"\n[ERROR] Command failed with exit code {exit_code}")
    return exit_code, out_log

def deploy():
    print("--- Starting Robust Deployment ---")
    
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    # 1. Connection Loop
    connected = False
    max_retries = 30
    retry_delay = 10
    print(f"Waiting for server {HOSTNAME} (Max {max_retries * retry_delay}s)...")
    
    for i in range(max_retries):
        try:
            print(f"Attempt {i+1}...", end=" ", flush=True)
            client.connect(HOSTNAME, username=USERNAME, password=PASSWORD, timeout=10)
            print("Connected!")
            connected = True
            break
        except Exception as e:
            print(f"Failed ({e}).")
            time.sleep(retry_delay)
            
    if not connected:
        print("\nCould not connect to server. Please ensure it is powered on.")
        return

    # 2. Check Disk Space
    print("\n--- Checking Disk Space ---")
    run_command(client, "df -h /")
    
    # 3. Add Swap (Vital for low RAM VPS)
    print("\n--- Configuring Swap ---")
    ec, out = run_command(client, "swapon --show")
    if not out.strip():
        print("No swap detected. Attempting to create 2GB swap...")
        # Check if swapfile exists and delete it
        run_command(client, "rm -f /swapfile", ignore_error=True)
        
        # Method 1: fallocate
        ec, _ = run_command(client, "fallocate -l 2G /swapfile", ignore_error=True)
        if ec != 0:
            print("fallocate failed. Method 2: dd (this takes time)...")
            run_command(client, "dd if=/dev/zero of=/swapfile bs=1M count=2048")
        
        run_command(client, "chmod 600 /swapfile")
        run_command(client, "mkswap /swapfile")
        ec, _ = run_command(client, "swapon /swapfile")
        
        if ec == 0:
            print("Swap enabled successfully.")
            # Persist
            run_command(client, "grep -q '/swapfile' /etc/fstab || echo '/swapfile none swap sw 0 0' >> /etc/fstab")
        else:
            print("WARNING: Failed to enable swap. Build might crash!")
    else:
        print("Swap is already active.")

    # 4. Upload Code
    print(f"\n--- Uploading {ZIP_FILE} ---")
    ftp = client.open_sftp()
    
    # Ensure directory exists
    run_command(client, f"mkdir -p {TARGET_PATH}")
    
    remote_zip = f"{TARGET_PATH}/{ZIP_FILE}"
    try:
        ftp.put(ZIP_FILE, remote_zip)
        print("Upload complete.")
    except Exception as e:
        print(f"Upload failed: {e}")
        return
    ftp.close()

    # 5. Build
    print("\n--- Building Application ---")
    # Clean install to be safe
    cmds = [
        f"cd {TARGET_PATH}",
        f"rm {ZIP_FILE}", # Remove zip first to check unzip? No.
        f"unzip -o -q {ZIP_FILE}",
        f"rm {ZIP_FILE}", # Save space
        "npm install",
        "npm run build"
    ]
    full_cmd = " && ".join(cmds)
    ec, _ = run_command(client, full_cmd)
    
    if ec != 0:
        print("\nBuild Failed! Checking logs...")
        return

    # 6. PM2 Restart
    print("\n--- Restarting PM2 ---")
    app_name = "property-tools-online"
    
    # Check if pm2 exists
    ec, _ = run_command(client, "pm2 -v", ignore_error=True)
    if ec != 0:
        run_command(client, "npm install -g pm2")
    
    # Start/Restart
    run_command(client, f"pm2 delete {app_name}", ignore_error=True)
    run_command(client, f"cd {TARGET_PATH} && pm2 start npm --name '{app_name}' -- start")
    run_command(client, "pm2 save")
    
    print("\n--- Deployment Complete ---")
    client.close()

if __name__ == "__main__":
    deploy()
