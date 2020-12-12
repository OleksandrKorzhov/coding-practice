const collectionsFacade = require('../libs/collectionsFacade');
const itemModelFactory = require('../models/itemModel');

(async () => {
  const coll = await collectionsFacade();

  const bulk = coll.items()
    .initializeUnorderedBulkOp();

  for (let i = 0; i < 100; i++) {
    const isEven = i % 2 === 0;
    bulk.insert(
      itemModelFactory({
        name: `Item_${i}`,
        orderNumber: i,
        colors: isEven ? ['green', 'blue'] : ['white', 'yellow'],
        mark: isEven ? 'f' : 's'
      })
    );
  }

  try {
    await bulk.execute();
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
