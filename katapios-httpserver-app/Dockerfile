FROM node:16.13.0

WORKDIR /katapios-httpserver-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start
