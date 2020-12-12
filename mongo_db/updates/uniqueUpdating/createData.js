const collectionsFacade = require('../../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();
  const itemsColl = coll.items();

  try {
    await itemsColl.insertOne({
      name: 'Paper',
      types: [
        'standard',
        'improved',
        'special'
      ]
    });

    const createdItem = await itemsColl.findOne({ name: 'Paper' });
    console.log(createdItem);
  } catch (e) {
    console.error(e.stack);
  }

  console.log('Item was successfully created');

  coll.close();
})();
