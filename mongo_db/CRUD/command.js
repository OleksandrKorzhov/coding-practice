const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');

(async () => {
  const connection = await connect();
  const db = connection.db(dbName);
  const coll = db.collection(collection);

  try {
    const collStats = await db.command({
      collStats: collection,
    });
    console.log(collStats);
  } catch (e) {
    console.error(e.stack);
  }

  connection.close();
})();

