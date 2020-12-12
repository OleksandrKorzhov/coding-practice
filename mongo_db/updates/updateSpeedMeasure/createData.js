const collectionsFacade = require('../../libs/collectionsFacade');

(async () => {
  const coll = await collectionsFacade();
  const usersColl = coll.users();

  try {
    await usersColl.insertOne({
      name: 'SpeedTestUser',
      age: 25,
      languages: [
        'JS',
        'PHP',
        'Ruby'
      ],
      address: {
        city: 'Vinnytsia',
        street: 'Kelletskaya'
      }
    });
  } catch (e) {
    console.error(e.stack);
  }

  console.log('Test data created');

  coll.close();
})();
