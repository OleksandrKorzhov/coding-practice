const collectionsFacade = require('../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();

  let items;
  try {
    items = await coll.items()
      .aggregate([
        {
          $project: {
            state: {
              /**
               * $cond - act itself as ternary operator
               * if then else - os one of the possible syntax
               * another one is [<condition>, <true-case>, <false-case>]
               */
              $cond: {
                if: { $eq: ['$mark', 's'] },
                then: 'selling',
                else: 'freeze'
              }
            }
          }
        },
        {
          $limit: 5
        }
      ])
      .toArray();
  } catch (e) {
    console.error(e.stack);
  }

  console.log(items);

  coll.close();
})();
