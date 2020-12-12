const collectionsFacade = require('../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();

  let items;
  const existingColors = [
    'purpure',
    'grey',
    'black'
  ];
  try {
    items = await coll.items()
      .aggregate([
        {
          $project: {
            colors: {
              $setUnion: ['$colors', existingColors]
            }
          }
        },
        {
          $limit: 5
        }
      ])
      .toArray();
  } catch (e) {
    console.log(e.stack);
  }

  console.log(items);

  coll.close();
})();

