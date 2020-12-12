const connect = require('./connect');
const { dbName, collection } = require('../config/config');

const collectionsFacade = async () => {
  const connection = await connect();
  const db = connection.db(dbName);

  return {
    users: () => db.collection('users'),
    items: () => db.collection('items'),
    tree: () => db.collection('tree'),
    close: () => connection.close()
  };
};

module.exports = collectionsFacade;

