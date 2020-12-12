FROM node:10-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

RUN echo 'Hello from build'

COPY package*.json ./

RUN npm cache clean --force && npm install --quiet

COPY . .

CMD node server.js
