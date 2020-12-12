const { getResponse } = require('./middlewareTools');
const { responseConstants } = require('../constants');
const { handleErrors } = require('../errors');

module.exports = {
  sendResponse(req, res, next) {
    res.statusCode = responseConstants.SUCCESS;
    res.json(
      getResponse(req),
    );
  },
  handleError(err, req, res, next) {
    res.statusCode = responseConstants.SERVER_ERROR;
    res.json(
      handleErrors(err),
    );
  }
};
