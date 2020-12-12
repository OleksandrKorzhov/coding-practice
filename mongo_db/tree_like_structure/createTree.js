const collectionsFacade = require('../libs/collectionsFacade');

/**
 * This code creates hierarchy of nodes in tree like structure
 */

const createNodeThunk = collection => async ({ name, level, parentId, listOfAncestors }) => {
  return await collection.insert({
    name,
    level,
    parentId,
    listOfAncestors,
  });
};

const createNodesSetThunk = collection => ({ level, namePart, parentId, listOfAncestors, count }) => Promise.all(
  Array.apply(null, { length: count })
    .map((_, index) => createNodeThunk(collection)({
      name: `${namePart}_${index}`,
      level: level,
      parentId: typeof parentId === 'function' ? parentId({index}) : parentId,
      listOfAncestors,
    }))
);

const getInsertedIds = (insertResults) => insertResults.map(({ insertedIds }) => Object.values(insertedIds))
  .reduce((finalSet, newElement) => ([...finalSet, ...newElement]), [])

;(async () => {
  const coll = await collectionsFacade();
  const treeColl = coll.tree();
  const createNode = createNodeThunk(treeColl);
  const createNodesSet = createNodesSetThunk(treeColl);

  let firstNodes;
  let secondNodes;
  let thirdNodes;
  let parentId;
  let listOfAncestors = [];
  try {
    /**
     * First level nodes
     */
    firstNodes = getInsertedIds(
      await createNodesSet({
        level: 1,
        namePart: 'firstLevel',
        count: 2,
      })
    );

    parentId = firstNodes[0];
    listOfAncestors.push(parentId);
    secondNodes = getInsertedIds(
      await createNodesSet({
        namePart: 'secondLevel',
        level: 2,
        count: 3,
        parentId: ({ index }) => parentId,
        listOfAncestors: listOfAncestors
      })
    );

    parentId = secondNodes[0];
    listOfAncestors.push(parentId);
    thirdNodes = getInsertedIds(
      await createNodesSet({
        namePart: 'thirdLevel',
        level: 3,
        count: 2,
        parentId: () => parentId,
        listOfAncestors: listOfAncestors
      })
    );
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();

