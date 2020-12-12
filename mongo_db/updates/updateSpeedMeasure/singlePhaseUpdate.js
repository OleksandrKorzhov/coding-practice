const collectionsFacade = require('../../libs/collectionsFacade');

/**
 * Updating document in single phase
 * Amount: 1
 * Time: 11 - 14 ms
 */

(async () => {
  const coll = await collectionsFacade();
  const userColl = coll.users();

  try {
    console.time('userUpdate');

    // findAndModify representation in js driver
    await userColl.findOneAndUpdate({ name: 'SpeedTestUser' }, {
      $inc: {
        age: 10
      }
    });

    console.timeEnd('userUpdate');
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
