
import subprocess
import time
import sys
import os

def run_ssh():
    cmd = ["ssh", "-o", "StrictHostKeyChecking=no", "root@161.97.77.9", "ls", "-F", "/var/www"]
    
    print(f"Running command: {' '.join(cmd)}")
    
    process = subprocess.Popen(
        cmd, 
        stdin=subprocess.PIPE, 
        stdout=subprocess.PIPE, 
        stderr=subprocess.PIPE,
        text=True
    )

    # Wait a bit for connection establishment
    time.sleep(2)
    
    # Send password
    try:
        print("Sending password...")
        process.stdin.write("6l35QkMy8\n")
        process.stdin.flush()
    except Exception as e:
        print(f"Error writing to stdin: {e}")

    # Read output
    # strict communication might hang if we don't close stdin? 
    # But communicate() handles it.
    stdout_data, stderr_data = process.communicate()
    
    print("--- STDOUT ---")
    print(stdout_data)
    print("--- STDERR ---")
    print(stderr_data)

if __name__ == "__main__":
    run_ssh()
