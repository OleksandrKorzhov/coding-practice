const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');

/**
 * Inserting one by one takes: 355.88ms pert 1000 records
 * for local database
 */
(async () => {
  const connection = await connect();

  const db = connection.db(dbName);
  const coll = db.collection(collection);

  try {
    console.time('insert');
    for (let i = 0; i < 10000; i++) {
      await coll.insertOne({
        name: `user_${i}`,
        partialNumber: i
      });
    }
  } catch (e) {
    console.error(e.stack);
  }
  console.timeEnd('insert');
  connection.close();
})();
