# toybrain
a toy-like, just-for-learning project to use cloud, docker, react, redux, smart home related thing

# Instruction for deploying Nginx
## Ref to this page: https://www.digitalocean.com/community/tutorials/how-to-run-nginx-in-a-docker-container-on-ubuntu-14-04
## Get official nginx image from dockerhub
sudo docker pull nginx

## Make sure nginx is running (make sure http 80 port is allowed in your AWS's inbound setting of security group)
sudo docker run --name docker-nginx -p 80:80 nginx
docker rm docker-nginx

## Run Nginx and let it access outside html and outside configurations
sudo docker run --name docker-nginx -p 80:80 -v ~/docker-nginx/html:/usr/share/nginx/html -v ~/docker-nginx/default.conf:/etc/nginx/conf.d/default.conf -d nginx

# Create React App and using Redux, React-Bootstrap, .
https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f
https://github.com/facebookincubator/create-react-app
http://www.penta-code.com/how-to-add-redux-to-create-react-app/ //Add Redux into app created by 'create-react-app'
https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app //Add ESlint into app created by 'create-react-app'
(cancel) http://blog.burgettweb.net/2017/01/07/using-bootstrap-with-create-react-app/ //Add Bootstrap into app
http://momentjs.com/  //Add Moment.js for parsing and validating time
https://react-bootstrap.github.io/getting-started.html //Add react-bootstrap into app created by 'create-react-app'
(cancel) https://github.com/gaearon/redux-thunk //Add Redux-thunk for async actions, e.g.: fetch webapis
(cancel) http://redux-form.com/6.8.0/docs/GettingStarted.md/ //Add Redux-form for better submit form validation
https://engineering.thetrainline.com/handling-api-calls-in-redux-with-redux-api-middleware-c95c38816e13 //using redux middleware to do async actions, RSAA
https://github.com/agraboso/redux-api-middleware //same with previous purpose

# Add Express WebAPI
https://code.visualstudio.com/docs/nodejs/nodejs-tutorial //visualStudio code tutorial
https://daveceddia.com/create-react-app-express-backend/ //Add an Express WebAPI server via using express-generator
https://www.getpostman.com/ //Download Postman for testing WebAPIs
https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3 //Make react app dynamic, and change it to Redux.
https://www.fullstackreact.com/articles/how-to-get-create-react-app-to-work-with-your-rails-api/ //Rails on React, a reference to fetch webAPI
## CORS issues
https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
Proxying API Requests in Development: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md
## Make express webAPI restful and db-ready
https://zellwk.com/blog/crud-express-mongodb/ //connect to mongodb
https://mlab.com/databases/cad-time-events/collections/timeEvents?q=&f=&s=&pageNum=0&pageSize=10 //my mongolab db
https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4 //make it restful
https://www.terlici.com/2015/04/03/mongodb-node-express.html //sample to create a dbhelper
https://gist.github.com/iksose/9401758 //sample to manipulate mongodb in dbhelper
