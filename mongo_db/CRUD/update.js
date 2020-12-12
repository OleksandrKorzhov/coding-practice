const { dbName, collection } = require('../config/config');
const connect = require('../libs/connect');
/**
 * Update one by one
 * Local database
 * Takes: 689.377 ms per 1000 items
 * Takes: 24 sec 154 ms per 10000 records
 */
(async () => {
  const connection = await connect();
  const db = connection.db(dbName);
  const coll = db.collection(collection);

  console.time('update');
  try {
    for (let i = 0; i < 10000; i++) {
      await coll.updateOne({ partialNumber: i }, {
        $set: {
          languages: [
            'JavaScript',
            'PHP',
            'Ruby',
          ],
        },
      });
    }
  } catch (a) {
    console.error(a.stack);
  }
  console.timeEnd('update');

  connection.close();
})();
