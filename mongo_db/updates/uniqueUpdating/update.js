const collectionsFacade = require('../../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();
  const itemsColl = coll.items();

  console.log('Start updating');

  try {
    const newType = 'discount';
    const itemPredicate = {
      name: 'Paper',
      /**
       * Add contr condition to prevent updates of that documents which already have such value
       *
       * Here we add condition for array each element of array
       */
      types: {
        $ne: newType,
      }
    };

    /**
     * This update will completed successfully
     */
    const update_1 = await itemsColl.updateOne(itemPredicate, {
      $push: {
        types: newType,
      }
    });

    console.log('Update 1 result:\n', await itemsColl.findOne({ name: 'Paper' }));

    /**
     * This update complete without changing any document
     */
    const update_2 = await itemsColl.updateOne(itemPredicate, {
      $push: {
        types: newType,
      }
    });

    console.log('Update 2 result:\n', await itemsColl.findOne({ name: 'Paper' }));
  } catch (e) {
    console.error(e.stack);
  }

  console.log('Item updating finished');

  coll.close();
})();
