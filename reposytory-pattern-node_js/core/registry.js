let services = {};

const setService = (serviceObj) => (services = { ...services, ...serviceObj });

/**
 * Registry is 'service locator'
 * Its role just collect services from all places of program and provide them when it will be required
 */
module.exports = {
  setUserListFetchingStrategy: (userListFetchingStrategy) => setService({ userListFetchingStrategy }),
  setUserFetchingByIdStrategy: (userFetchingByIdStrategy) => setService({ userFetchingByIdStrategy }),
  setUserAddStrategy: (userAddStrategy) => setService({ userAddStrategy }),
  setUserRepository: (userRepository) => setService({ userRepository }),

  getUserListFetchingStrategy: () => services.userListFetchingStrategy,
  getUserFetchingByIdStrategy: () => services.userFetchingByIdStrategy,
  getUserAddStrategy: () => services.userAddStrategy,
  getUserRepository: () => services.userRepository,
};
