const collectionsFacade = require('../../libs/collectionsFacade');

/**
 * Document updating with prior fetching
 * Amount documents: 1
 * Time: 26 - 17 ms
 */

(async () => {
  const coll = await collectionsFacade();
  const usersColl = coll.users();

  try {
    console.time('userUpdating');

    const user = await usersColl.findOne({
      name: 'SpeedTestUser'
    });

    await usersColl.updateOne({ _id: user._id }, {
      $inc: {
        age: 10
      }
    });

    console.timeEnd('userUpdating');
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
