#!/bin/bash
sudo docker run -p 8080:80 --rm --name webapp benzimmer-us:latest \
    && sudo docker cp $HOME/Git/webapp/benzimmer-blog/webapp.subdomain.conf swag:/config/nginx/proxy-confs