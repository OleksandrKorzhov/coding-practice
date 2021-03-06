module.exports = {
  HOST: 'localhost',
  PORT: '27017',
  DB_NAME: 'users',
  CONNECT_TIMEOUT: 10000,
  SOCKET_TIMEOUT: 45000,
  AUTO_RECONNECT: true,
  RECONNECT_TRIES: Number.MAX_VALUE,
  RECONNECT_INTERVAL: 500,
  BUFFER_COMMAND: true,
  AUTO_INDEX: true,
  USE_CREATE_INDEX: true,
  USE_FIND_AND_MODIFY: true,
  POOL_SIZE: 5,
  KEEP_ALIVE: true,
  KEEP_ALIVE_TIMEOUT: 5000,
};
