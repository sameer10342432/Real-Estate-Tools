
import sys
import os
import time

sys.stdout.reconfigure(encoding='utf-8')
sys.path.append(os.path.join(os.getcwd(), 'libs'))
import paramiko

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'

def run():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
    
    cmds = [
        "free -h",
        "ls -la /var/www/property-tools.online",
        "tail -n 20 /var/www/property-tools.online/package.json",
        "npm -v",
        "node -v"
    ]
    
    for cmd in cmds:
        print(f"--- {cmd} ---")
        stdin, stdout, stderr = client.exec_command(cmd)
        print(stdout.read().decode('utf-8', errors='replace'))
        print(stderr.read().decode('utf-8', errors='replace'))
        
    client.close()

if __name__ == "__main__":
    run()
