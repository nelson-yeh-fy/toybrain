# toybrain
a toy-like, just for fun project for using cloud, docker, smart home related thing

# Instruction for deploying Nginx
## Ref to this page: https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04
## Get official nginx image from dockerhub
sudo docker pull nginx

## Make sure nginx is running (make sure http 80 port is allowed in your AWS's inbound setting of security group)
sudo docker run --name docker-nginx -p 80:80 nginx
docker rm docker-nginx

## Run Nginx and let it access outside html and outside configurations
sudo docker run --name docker-nginx -p 80:80 -v ~/docker-nginx/html:/usr/share/nginx/html -v ~/docker-nginx/default.conf:/etc/nginx/conf.d/default.conf -d nginx

#setup desktop sublime env.
git env: http://oranwind.org/git-zai-windows-xia-an-zhuang-git-ban-ben-kong-zhi/
sublime env: http://eddychang.me/blog/16-javascript/51-sublime-text-3-react.html
