
import sys
import os

sys.path.append(os.path.join(os.getcwd(), 'libs'))
import paramiko

HOSTNAME = '161.97.77.9'
USERNAME = 'root'
PASSWORD = '6l35QkMy8'

# Based on existing config but with proxy_pass
NEW_CONF = """server {
    if ($host = www.property-tools.online) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = property-tools.online) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;

    server_name property-tools.online www.property-tools.online;
    return 404; # managed by Certbot
}

server {
    server_name property-tools.online www.property-tools.online;

    access_log /var/log/nginx/property-tools.online.access.log;
    error_log  /var/log/nginx/property-tools.online.error.log;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/property-tools.online/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/property-tools.online/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
"""

def update_nginx():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(HOSTNAME, username=USERNAME, password=PASSWORD)
    except Exception as e:
        print(f"Connection failed: {e}")
        return
    
    print("Writing new Nginx config...")
    ftp = client.open_sftp()
    with ftp.file("/etc/nginx/sites-available/property-tools.online", "w") as f:
        f.write(NEW_CONF)
    ftp.close()
    
    print("Testing config...")
    stdin, stdout, stderr = client.exec_command("nginx -t")
    out = stdout.read().decode() + stderr.read().decode()
    print(out)
    
    if "successful" in out:
        print("Reloading Nginx...")
        client.exec_command("systemctl reload nginx")
        print("Nginx reloaded.")
    else:
        print("Config check failed! Not reloading.")
    
    client.close()

if __name__ == "__main__":
    update_nginx()
