const { registry } = require('../core');

/**
 * Controller it is glue between request data and underlying system
 *
 * Controllers controls order of execution
 * and usually they follow 'design by contract' idea.
 * Thus controllers dont't know anything about certain entities
 * they only know about contract what should be executed and about gradients of contract.
 *
 * Gradients of contract are:
 * - pre-requirements - state of the program what is required to execute contract
 * - determinants - that action what will be executed
 * - post-requirements - that what should be received as result
 */
module.exports = {
  getUserList(paginationData) {
    return registry.getUserRepository()
      .getUserList(paginationData);
  },
  getUser(userIdData) {
    return registry.getUserRepository()
      .getUserById(userIdData);
  },
  createUser(userCreatingData) {
    return registry.getUserRepository()
      .addUser(userCreatingData);
  }
};
