# Direct specifying node versions allow us save us from suden version changes and reproduce bugs in any machine
FROM node:10.16.3 AS development

# this command will be run as root
RUN mkdir -p /srv/node/app/node_modules && chown node:node -R /srv/node/app/node_modules

# switch to 'node' user
USER node

WORKDIR /srv/node/app

COPY --chown=node:node package*.json ./

RUN npm cache clean --force && npm install --quiet

COPY --chown=node:node . .

FROM node:10.16.3-slim AS production

WORKDIR /srv/node/app

USER node

# coly files from previous stage
COPY --from=development --chown=root:root /srv/node/app ./

#CMD ['npm', 'run', 'prod']
