
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
    try:
        client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
    except:
        print("Connection failed")
        return

    # Check swap
    print("--- Checking Swap ---")
    stdin, stdout, stderr = client.exec_command("free -h")
    print(stdout.read().decode())
    
    # Run npm install
    print("--- Running npm install ---")
    # We go to dir
    cmd = "cd /var/www/property-tools.online && npm install"
    stdin, stdout, stderr = client.exec_command(cmd)
    
    # Stream output
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            print(stdout.channel.recv(1024).decode('utf-8', errors='replace'), end="")
        if stderr.channel.recv_ready():
            print(stderr.channel.recv(1024).decode('utf-8', errors='replace'), end="")
    
    print("\nExit status:", stdout.channel.recv_exit_status())

    # Run build
    print("--- Running npm run build ---")
    cmd = "cd /var/www/property-tools.online && npm run build"
    stdin, stdout, stderr = client.exec_command(cmd)
    
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            print(stdout.channel.recv(1024).decode('utf-8', errors='replace'), end="")
        if stderr.channel.recv_ready():
            print(stderr.channel.recv(1024).decode('utf-8', errors='replace'), end="")

    print("\nExit status:", stdout.channel.recv_exit_status())

    client.close()

if __name__ == "__main__":
    run()
