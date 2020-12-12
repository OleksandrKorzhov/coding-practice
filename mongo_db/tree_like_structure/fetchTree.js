const collectionsFacade = require('../libs/collectionsFacade');
const mongodb = require('mongodb');

/**
 * Traverse through tree structure and return it
 */

const getChildThunk = collection => (node) => collection.find({ parentId: node._id })
  .toArray();

(async () => {
  const coll = await collectionsFacade();
  const treeColl = coll.tree();
  const getChild = getChildThunk(treeColl);

  try {
    const rootNode = await treeColl.findOne({ _id: new mongodb.ObjectId('5da4f30b20a0b511316da301') });
    const rootChildren = await getChild(rootNode);

    await handleChildren({
      node: rootNode,
      children: rootChildren,
    });

    /**
     * Function handle each layer of nested documents
     */
    async function handleChildren({ node, children }) {
      while (children.length) {
        const child = children.pop();
        const tree = await getChild(child);

        /**
         * Here we could apply any operation
         */
        !node.children && (node.children = []);
        node.children.push(child);

        if (tree && tree.length) {
          await handleChildren({
            node: child,
            children: tree,
          })
        }
      }
    }

    console.log(rootNode.children.pop());
  } catch (e) {
    console.error(e.stack);
  }

  coll.close();
})();
