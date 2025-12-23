
import sys
import os
import json
import time

sys.stdout.reconfigure(encoding='utf-8')
sys.path.append(os.path.join(os.getcwd(), 'libs'))
import paramiko

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'
DOMAIN_NAME = 'property-tools.online'

def run():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
    
    target_path = "/var/www/property-tools.online"
    
    print("Stopping existing PM2 processes...")
    client.exec_command(f"pm2 delete property-tools-online")
    client.exec_command(f"pm2 delete {DOMAIN_NAME}")
    
    print("Starting in DEV mode (npm run dev)...")
    # Clean validation: ensuring node_modules exists
    stdin, stdout, stderr = client.exec_command(f"cd {target_path} && ls node_modules")
    if "next" not in stdout.read().decode():
        print("Installing dependencies first...")
        client.exec_command(f"cd {target_path} && npm install")
    
    # Start PM2
    # We use 'next dev' via npm.
    # Command: npm run dev -- -p 3000 -H 0.0.0.0
    # PM2 needs to run npm.
    
    start_cmd = f"cd {target_path} && pm2 start npm --name 'property-tools-online' -- run dev -- -p 3000 -H 0.0.0.0"
    print(f"Executing: {start_cmd}")
    
    stdin, stdout, stderr = client.exec_command(start_cmd)
    print(stdout.read().decode())
    print(stderr.read().decode())
    
    client.exec_command("pm2 save")
    print("PM2 saved.")
    
    client.close()

if __name__ == "__main__":
    run()
