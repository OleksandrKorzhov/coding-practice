const collectionsFacade = require('../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();
  const userColl = coll.users();

  const splitByLanguage = {
    $unwind: '$languages'
  };

  const countByLanguage = {
    $group: {
      _id: '$languages',
      count: {
        $sum: 1,
      },
    },
  };

  const writeIntoProgrammersColl = {
    $out: 'programmers'
  };

  try {
    const programmersSet = await userColl.aggregate([
      splitByLanguage,
      // writeIntoProgrammersColl, $out could be placed only as final stage
      countByLanguage,
      writeIntoProgrammersColl, // after this stage no output
    ]).toArray();

    console.log(programmersSet);
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
