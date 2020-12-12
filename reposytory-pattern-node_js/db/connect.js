const mongoose = require('mongoose');
const { db } = require('../config');

module.exports = () => mongoose.connect(
  `mongodb://${db.HOST}:${db.PORT}/${db.DB_NAME}`,
  {
    bufferCommands: db.BUFFER_COMMAND,
    useCreateIndex: db.USE_CREATE_INDEX,
    useFindAndModify: db.USE_FIND_AND_MODIFY,
    useNewUrlParser: true,
    autoIndex: db.AUTO_INDEX,
    autoReconnect: db.AUTO_RECONNECT,
    reconnectTries: db.RECONNECT_TRIES,
    reconnectInterval: db.RECONNECT_INTERVAL,
    connectTimeoutMS: db.CONNECT_TIMEOUT,
    socketTimeoutMS: db.SOCKET_TIMEOUT,
    keepAlive: db.KEEP_ALIVE,
    keepAliveTimeout: db.KEEP_ALIVE_TIMEOUT,
    poolSize: db.POOL_SIZE,
  }
);
module.exports.connection = mongoose.connection;
