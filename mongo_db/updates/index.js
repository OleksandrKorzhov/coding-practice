/**
 * Difference between queries and updates
 * queries use infix-notation and have adjective style { field: { $queryOperator: queryValue } }
 * updates use prefix-notation and have verb style { $updateOperator: { field: value } }
 *
 * Approaches of document update:
 * replace document
 *  + easy to use
 *  - necessity to control concurrent updates (optimistic/pessimistic lock)
 * target updating
 * + higher performance
 * + easy to work with concurrent updates
 * - requires more efforts to implement
 *
 * $ - is a positional operator. It will be substituted by matching position of a predicate
 *  Used for updating arrays.
 *
 * Tips:
 * - we could use the same syntax, including operators, for updating/querying nested values and values nested within arrays
 * - findAndModify() could be used for updating and removing documents
 * - $isolated flag could enforce operation performing without pauses.
 *    If isolated operation fails on its half way there is no implicit rollback scenario
 * changing a size or a structure of a document will lead to document rewrite.
 * updating document without changing size and structure are most cheap
 *
 * Tasks:
 * - what is more performant:
 *    * issue update and look to the result (SLOWER)
 *    * issue query and then issue update if query return something? (FASTER)
 *
 * Update operators:
 * $inc - could be used to increase or decrease a value. Thus for add or subtract operation.
 *    Could be used with 'upset'
 * $set
 * $unset
 *    When used for array elements will set them to null
 * $rename
 * $setOnInsert - perform update operation only when document is inserted with { upset: true }
 *
 * Array update operators:
 * $push - add element to the array
 * $addToSet - add elements to the array is they don't exists.
   * $each - modifier that could be used with $push and $addToSet operators and allow to add multiple elements
   * $slice - truncate an array to specified value
   *    if negative passed, it would calculate items for the end of the array
   *    if positive passed, it would calculate items from the beginning of the array
   * $sort - sort updated array. Fire before $slice operation
 * $pop - remove the last(1) or first (-1) element of the array
 * $pull - remove array element by condition. Could receive either scalar value or complex condition statement
 * $pullAll - remove multiple array elements
 * $ - will be substituted by position of predicate matching
 *
 * Remove methods:
 * .remove({...predicate...}) - remove a subset of the collection
 * .drop() - drop the entire collection or the database
 */
