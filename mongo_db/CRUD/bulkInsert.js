const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');

/**
 * Bulk operation takes: 30.961ms per 1000 records
 * 228 ms per 10000 records
 * for local database
 */
(async () => {
  const connection = await connect();

  const db = connection.db(dbName);
  const coll = db.collection(collection);

  console.time('bulkInsert');
  const bulkWrite = coll.initializeOrderedBulkOp();
  for (let i = 0; i < 10000; i++) {
    bulkWrite.insert({
      name: `user_${i}`,
      partialNumber: i
    });
  }

  try {
    await bulkWrite.execute();
  } catch (e) {
    console.error(e.stack);
  }

  console.timeEnd('bulkInsert');
  connection.close();
})();
