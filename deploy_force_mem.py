
import sys
import os
import json
import time

sys.stdout.reconfigure(encoding='utf-8')
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
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            chunk = stdout.channel.recv(1024).decode('utf-8', errors='replace')
            if print_output: print(chunk, end="")
            out_log += chunk
        if stderr.channel.recv_ready():
            chunk = stderr.channel.recv(1024).decode('utf-8', errors='replace')
            if print_output: print(chunk, end="")
            out_log += chunk
        time.sleep(0.1)
    
    exit_code = stdout.channel.recv_exit_status()
    if exit_code != 0:
        print(f"\nCommand failed with exit code {exit_code}")
    return exit_code, out_log

def deploy():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
    except Exception as e:
        print(f"Connection failed: {e}")
        return

    # 1. Reset Swap
    print("Resetting Swap...")
    run_command(client, "swapoff /swapfile", print_output=False)
    run_command(client, "rm -f /swapfile", print_output=False)
    
    print("Creating 4GB swap...")
    ec, _ = run_command(client, "dd if=/dev/zero of=/swapfile bs=1M count=4096", print_output=False)
    if ec == 0:
        run_command(client, "chmod 600 /swapfile", print_output=False)
        run_command(client, "mkswap /swapfile", print_output=False)
        run_command(client, "swapon /swapfile", print_output=False)
        run_command(client, "free -h")
    else:
        print("Swap creation failed! Proceeding with available RAM...")

    target_path = "/var/www/property-tools.online"
    
    # 2. Upload
    ftp = client.open_sftp()
    remote_zip = f"{target_path}/{ZIP_FILE}"
    print(f"Uploading {ZIP_FILE}...")
    ftp.put(ZIP_FILE, remote_zip)
    print("Uploaded.")
    ftp.close()

    # 3. Build with memory options
    print("Starting Build Process with 8GB Limit...")
    
    build_cmd = (
        f"cd {target_path} && "
        f"unzip -o -q {ZIP_FILE} && "
        f"rm {ZIP_FILE} && "
        "npm install && "
        "export NODE_OPTIONS='--max-old-space-size=8192' && "
        "npm run build"
    )
    
    ec, _ = run_command(client, build_cmd)
    
    if ec != 0:
        print("Build FAILED.")
        client.close()
        return

    # 4. PM2
    print("Updating PM2...")
    # ... Same PM2 logic ...
    run_command(client, f"pm2 restart property-tools-online || pm2 start npm --name 'property-tools-online' -- start --cwd {target_path}")
    run_command(client, "pm2 save")

    print("Success!")
    client.close()

if __name__ == "__main__":
    deploy()
