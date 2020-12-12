const { userFactory } = require('../models/userModel');
const collectionsFacade = require('../libs/collectionsFacade');

(async () => {
  let coll;
  try {
    coll = await collectionsFacade();
    const user = await coll.users()
      .find()
      // .findOne() - it hasn't projection
      .limit(1)
      /**
       * it seems like limit and project is a parameters of request to database
       * and as result we will receive a cursor =)
       *
       * $slice - allow us make pagination on returned array
       * $slice: integer - return only specified amount of arguments. Could be a negative value to return elements from the end on the array
       * $slice: [integer, integer] - the first parameter specify amount to skip, the second specify amount to return
       */
      .project({ languages: { $slice: [1, 1] }, name: 1, _id: 0 }) // _id will be included authomatically, requires explicitly exclusion
      .toArray();

    console.log(user);
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
