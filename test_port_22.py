
import socket
import sys

host = "161.97.77.9"
port = 22

try:
    print(f"Attempting to connect to {host}:{port}...")
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(5)
    s.connect((host, port))
    print("Port 22 is OPEN.")
    
    # Try to receive banner
    banner = s.recv(1024)
    print(f"Received banner: {banner}")
    s.close()
except Exception as e:
    print(f"Failed to connect: {e}")
