const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');

/**
 * Update bia bulk operation
 * Local database
 * Takes: 329.657ms prt 1000 items
 * Takes: 21 sec and 656 ms per 10000 items
 */
(async () => {
  const connection = await connect();
  const db = connection.db(dbName);
  const coll = db.collection(collection);

  console.time('bulkUpdate');
  try {
    const bulk = coll.initializeUnorderedBulkOp();
    for (let i = 0; i < 10000; i++) {
      bulk.find({ partialNumber: i })
        .updateOne({
          $set: {
            languages: [
              'JavaScript',
              'PHP',
              'Ruby',
            ],
          },
        });
    }
    await bulk.execute();
  } catch (e) {
    console.error(e.stack);
  }
  console.timeEnd('bulkUpdate');

  connection.close();
})();
