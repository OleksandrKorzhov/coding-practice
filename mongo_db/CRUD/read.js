const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');

/**
 * Read operations with different values of batchSize
 * 'batchSize' determine amount of documents fetched in one iteration
 *
 * Experiment with local database
 */
(async () => {
  const connection = await connect();

  let counter = 0;
  console.time('read');
  try {
    const db = connection.db(dbName);
    const coll = db.collection(collection);
    // const cursor = coll.find().batchSize(100); // 105 ms
    // const cursor = coll.find().batchSize(1000); // 84 ms
    const cursor = coll.find().batchSize(10000); // 75 - 82 ms
    let user;
    while ((user = await cursor.next()) !== null) {
      counter++;
    }
  } catch (e) {
    console.error(e.stack);
  }
  console.log(`Amount of read docs: ${counter}`);
  console.timeEnd('read');

  connection.close();
})();
