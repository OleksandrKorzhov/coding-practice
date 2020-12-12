const collectionsFacade = require('../../libs/collectionsFacade');

/**
 * String comparing functions
 * $concat
 * $substr
 * $strcasecmp
 * $toUpper
 * $toLower
 */

(async () => {
  const coll = await collectionsFacade();

  const divideByLanguage = () => ({
    $unwind: '$languages'
  });

  const makeNickname = () => ({
    $project: {
      nickname: {
        $concat: ['$name', '_', '$languages'],
      },
      _id: 1,
      name: {
        $toUpper: '$name'
      },
      firstInitial: {
        $toUpper: {
          $substr: ['$name', 0, 1]
        }
      },
      languages: 1,
      partialNumber: 1
    },
  });

  let user;
  try {
    user = await coll.users()
      .aggregate([
        divideByLanguage(),
        makeNickname(),
        { $limit: 1 }
      ])
      .toArray();
  } catch (e) {
    console.error(e.stack);
  }

  console.log(user);

  coll.close();
})();
