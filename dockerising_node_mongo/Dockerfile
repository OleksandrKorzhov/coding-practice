FROM node:10-alpine
# *-alpine builds has low size
# node image by default will create user 'node'
# we will use that user according to best security pratices

ARG DOCKER_NODE_USER=root
ARG DOCKER_NODE_GROUP=root
ARG NODE_CONTAINER_PATH=/home/${DOCKER_NODE_USER}/app

# IMPORTANT!
# set NODE_ENV. It will affect on npm, express, and many other modules workflow
# primarily it intended to increase performance
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# create project directory and define onership of node user
RUN mkdir -p ${NODE_CONTAINER_PATH}/node_modules && chown -R $DOCKER_NODE_USER:$DOCKER_NODE_GROUP $NODE_CONTAINER_PATH
#RUN mkdir -p /home/node/app/node_modules

# In Dockerfile we could make all necessary preparation
# but we should avoid running our application from this file
# due to different context for environment variables

# Where out app will leave within container
WORKDIR $NODE_CONTAINER_PATH

COPY package*.json ./

USER $DOCKER_NODE_USER

# clean installed pachages
RUN npm install

# copy all of the files except that which defined in .dockerignore file
COPY --chown=$DOCKER_NODE_USER:$DOCKER_NODE_GROUP . .

CMD node server.js
