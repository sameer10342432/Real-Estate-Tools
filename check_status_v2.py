
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

def check_status():
    print(f"Connecting to {HOSTNAME}...")
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
        print("Connected.")
    except Exception as e:
        print(f"Connection failed: {e}")
        return

    commands = [
        ("PM2 Processes", "pm2 jlist"),
        ("Active Ports", "netstat -tulnp | grep -E 'node|nginx'"),
        ("Nginx Sites", "ls -F /etc/nginx/sites-enabled/"),
    ]

    pm2_list = None

    for title, cmd in commands:
        print(f"\n--- {title} ---")
        stdin, stdout, stderr = client.exec_command(cmd)
        out = stdout.read().decode('utf-8', errors='replace')
        err = stderr.read().decode('utf-8', errors='replace')
        
        if title == "PM2 Processes":
            try:
                pm2_list = json.loads(out)
                print(json.dumps(pm2_list, indent=2))
            except:
                print(out)
        else:
            print(out)
            if err:
                print(f"STDERR: {err}")

    # Check Nginx Config
    site_file = "property-tools.online" # Assumption
    print(f"\n--- Checking Nginx Config for {site_file} ---")
    stdin, stdout, stderr = client.exec_command(f"cat /etc/nginx/sites-enabled/{site_file}")
    out = stdout.read().decode('utf-8', errors='replace')
    print(out)

    # Check PM2 Logs if process exists
    if pm2_list:
        target_app = None
        for app in pm2_list:
            if 'property' in app.get('name', '') or 'online' in app.get('name', ''):
                target_app = app['name']
                break
        
        if target_app:
            print(f"\n--- Logs for {target_app} ---")
            stdin, stdout, stderr = client.exec_command(f"pm2 logs {target_app} --lines 30 --nostream")
            out = stdout.read().decode('utf-8', errors='replace')
            print(out)
        else:
            print("\nCould not find a relevant PM2 process to fetch logs for.")

    client.close()

if __name__ == "__main__":
    check_status()
