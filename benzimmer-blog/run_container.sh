#!/bin/bash
sudo docker run -it -p 8080:80 --rm --name blog blog-benzimmer-us:latest \
    && sudo docker cp $HOME/Git/webapp/benzimmer-blog/blog.subdomain.conf swag:/config/nginx/proxy-confs