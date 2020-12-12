const {
  controllersRegistration,
  handler,
  get,
  post,
  put,
  del,
} = require('./controllersRegistration');
const { registerMetadata } = require('./core');

module.exports = {
  registerMetadata,
  controllersRegistration,
  handler,
  get,
  post,
  put,
  del,
};
