#!/bin/bash
sudo docker run --name webapp \
    --network zimnet \
    -d -p 8080:80 \
    --restart=unless-stopped \
    benzimmer-us:latest

sudo docker cp $HOME/Git/webapp/benzimmer-blog/webapp.subdomain.conf swag:/config/nginx/proxy-confs

sudo docker cp $HOME/Git/webapp/benzimmer-blog/webapp.subfolder.conf swag:/config/nginx/proxy-confs

sudo docker restart swag