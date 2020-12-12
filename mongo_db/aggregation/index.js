/**
 * Available aggregations:
 * - $project - act similar to regular .project()
 * - $match - act almost like .find() with several exceptions
 * - $skip
 * - $limit
 * - $sort
 * - $unwind
 * - $group
 * - $out - write pipeline result in the collection. Could be used to create 'materialized view'
 * - $redact - control access
 * - $geoNear
 *
 * $push operators:
 * - $sum - allow to count amount of documents and total value of some field
 * - $avg
 * - $min
 * - $max
 * - $first
 * - $last
 * - $push
 * - $addToSet
 *
 * String aggregation operators
 * $concat
 * $substr
 * $strcasecmp
 * $toLower
 * $toUpper
 *
 * Arithmetic aggregation operators
 * $add
 * $subtract
 * $multiply
 * $divide
 * $mod - dividing by module
 *
 * Date aggregation functions
 * $year
 * $month
 * $week
 * $dayOfYear
 * $dayOfMonth
 * $dayOfWeek
 * $hour
 * $minute
 * $second
 * $millisecond
 *
 * Logical aggregation operators
 * $and
 * $or
 * $not - invert the result of other expression
 * $eq
 * $ne
 * $cmp - return 0 if values are equal
 * $ifNull - convert null to specified value
 * $cond - ternary operator
 * $gt
 * $gte
 * $lt
 * $lte
 *
 * Set operators:
 * $setEquals
 * $setUnion
 * $setIntersection
 * $setDifference
 * $etIsSubset - is the second array the subset of the first array
 * $anyElementTrue - is it equivalent for $or
 * $allElementTrue - is it equivalent for $and
 *
 * Miscellaneous aggregation operators
 * $meta - access to information related with text search
 * $size - return size on the array
 * $map - apply function to each array element
 * $let - define variables for using within the scope of an expression
 * $literal - return value of the expression without evaluating it
 *
 * Performance tips:
 * 1) Documents that passed to the next pipeline should be as small as it's possible.
 * 2) Indexes should be used
 *    Only $match and $sort could use indexes
 *
 * Limitation:
 * 16 MB for single document
 * 100 MB for single stage in aggregation pipeline
 *
 * Signature:
 * db.collection.aggregate(pipeline, options)
 *
 * Tasks:
 * - mathematic grouping with $group (DONE)
 * - writing final aggregation result with $out (DONE)
 * - writing intermediate aggregation result with $out (FAIL)
 * - $sum with specifying step size (DONE)
 * - $sum with specifying field from where take values
 * - date operators in $group ($year, $month, $day) and other types of "compound key"
 * - range operators $gte/$lte etc... used with date as value
 *
 * compound key - is when we use object with several fields as search indexed field, potentially unique
 *
 * materialized view - precalculated collection.
 * could be used for:
 *  snapshots in event sourcing
 *  aggregating representations of data optimized for reading
 */
