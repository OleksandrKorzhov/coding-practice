const {
  MONGO_DB_NAME,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOST
} = process.env;

module.exports = {
  MONGO_DB_NAME,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_OPTIONS: {
    // important to use new URL parser rather than deprecated
    useNewUrlParser: true,
    useFindAndModify: true,

    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    // limit for initial connection
    connectTimeoutMS: 10000,
    // limit for socket inactivity after initial connect
    socketTimeoutMS: 45000,

    autoIndex: true,
    // important to use createIndex rather than ensureIndex(deprecated)
    useCreateIndex: true
  }
};
