# specify the node base image with your desired version node:<version>
FROM node:10
#create a work app dir for itself, where whatever work it needs to do
#for our application,docker can put it inside the app folder
WORKDIR /app
#docker copies package.json inside app dir
COPY package.json /app
# run npm install command, docker will install all the packages
RUN npm install
#docker will copy everything from the current dir to app folder
COPY . /app
# cmd use to run the node app
CMD node app.js
#application's default port
EXPOSE 3000
