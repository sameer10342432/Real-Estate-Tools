
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
    
    print("Running build with log...")
    cmd = "cd /var/www/property-tools.online && npm run build > build.log 2>&1"
    stdin, stdout, stderr = client.exec_command(cmd)
    
    # Wait for completion
    exit_status = stdout.channel.recv_exit_status()
    print("Exit status:", exit_status)
    
    print("--- Log Content ---")
    stdin, stdout, stderr = client.exec_command("cat /var/www/property-tools.online/build.log")
    print(stdout.read().decode('utf-8', errors='replace'))
    
    client.close()

if __name__ == "__main__":
    run()
