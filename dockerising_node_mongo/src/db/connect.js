const mongoose = require('mongoose');
const { db } = require('../configs');

let URL;
if (db.MONGO_USERNAME && db.MONGO_PASSWORD) {
  /**
   * Such configurations both works
   * admin database could be used for managing purposes and we should avoid using it id production
   * in production more preferable is restrict access to database by creating user with specific credentials
   *
   * URL string for connecting to outer database via authentication through admin database
   * URL = `mongodb://${db.MONGO_USERNAME}:${db.MONGO_PASSWORD}@${db.MONGO_HOST}:${db.MONGO_PORT}/${db.MONGO_DB_NAME}?authSource=admin`;
   */
  URL = `mongodb://${db.MONGO_USERNAME}:${db.MONGO_PASSWORD}@${db.MONGO_HOST}:${db.MONGO_PORT}/${db.MONGO_DB_NAME}?authSource=${db.MONGO_DB_NAME}`;
} else {
  URL = `mongodb://${db.MONGO_HOST}:${db.MONGO_PORT}/${db.MONGO_DB_NAME}`;
}

/**
 * Here we use substack pattern.
 * As main functionality we export function that create connection to mongodb
 * As secondary members we export 'connection' object what we will use to subscribe to events
 */
module.exports = () => mongoose.connect(URL, db.MONGO_OPTIONS);
module.exports.connection = mongoose.connection;
