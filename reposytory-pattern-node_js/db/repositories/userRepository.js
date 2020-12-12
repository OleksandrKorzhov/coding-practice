const { registry } = require('../../core');
const { getListingParamsFromPage } = require('../dbHelpers');

/**
 * Repository is abstraction upon data layer
 * It is similar to 'query object' pattern but there is no notion about query,
 * client code know only interface to access to data
 *
 * Repository interact with 'specification' pattern what client code uses to express what should be received
 * and with data-layer patterns to fetch data.
 *
 * Repository could encapsulates access to any data layer, it could be API, DB, File, anything.
 *
 * Usually repository represent specific entity(root entity) in application
 * and there could be relation between different entities under the hood.
 *
 * Usually repository returns 'value object' presentation pf data
 */
module.exports = {
  getUserList: async ({ page, count = 15 }) => {
    const strategy = registry.getUserListFetchingStrategy();
    return await strategy(
      getListingParamsFromPage({ page, count }),
    );
  },
  getUserById: async ({ id }) => {
    const strategy = registry.getUserFetchingByIdStrategy();
    return await strategy({ id });
  },
  addUser: async ({ firstName, lastName }) => {
    const strategy = registry.getUserAddStrategy();
    return await strategy({ firstName, lastName });
  },
};
