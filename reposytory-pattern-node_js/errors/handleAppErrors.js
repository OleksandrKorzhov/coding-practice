const { responseConstants } = require('../constants');

module.exports = (err) => {
  return {
    error: true,
    code: responseConstants.SERVER_ERROR,
    errorData: {
      code: err.status || err.code,
      message: err.message,
    }
  };
};
