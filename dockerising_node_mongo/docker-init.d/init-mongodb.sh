#!/usr/bin/env bash

# This script intended to create new user in app database

echo 'Creating DB user'

mongo "${MONGO_DB_NAME}" \
  --host localhost \
  --port "${MONGO_PORT}" \
  -u "${MONGO_ROOT_USERNAME}" \
  -p "${MONGO_ROOT_PASSWORD}" \
  --authenticationDatabase=admin \
  --eval="db.createUser({ user: '${MONGO_APP_USERNAME}', pwd: '${MONGO_APP_PASSWORD}', roles: [{ role: 'dbOwner', db: '${MONGO_DB_NAME}' }] });"
