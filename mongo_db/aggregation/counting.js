const connect = require('../libs/connect');
const { dbName, collection } = require('../config/config');
const collectionsFacade = require('../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();

  const withPartialNumber = (start, end) => ({
    partialNumber: {
      $gt: start,
      $lt: end,
    }
  });

  let user;
  try {
    user = await coll.users()
      .aggregate([
        { $match: withPartialNumber(10, 20) },
        {
          $group: {
            _id: '$languages',
            count: { $sum: 1 }
          },
        }
      ])
      .toArray();
  } catch (e) {
    console.error(e.stack);
  }

  console.log(user);

  coll.close();
})();

