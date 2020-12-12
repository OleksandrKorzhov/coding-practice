const { userController } = require('../controllers');
const { setResponse } = require('./middlewareTools');
const { dtos } = require('../request');
const { userErrors } = require('../errors');

/**
 * Middleware role is to initialize controller
 * and handle consequences of execution of a controller method.
 *
 * With such structure we able just return data from controller
 * and if there is some error cases we able just throw an error with description of what happen
 */
module.exports = {
  async getUserList(req, res, next) {
    let userList = [];

    try {
      userList = await userController.getUserList(
        dtos.userRequestDtos.getUserListRequestDto(req)
      );
    } catch (e) {
      return next(
        new userErrors.CommonUserError(e)
      );
    }

    setResponse(req, userList);
    next();
  },
  async getUser(req, res, next) {
    let user = null;

    try {
      user = await userController.getUser(
        dtos.userRequestDtos.getUserRequestDto(req)
      );
    } catch (e) {
      return next(
        new userErrors.CommonUserError(e)
      );
    }

    setResponse(req, user);
    next();
  },
  async createUser(req, res, next) {
    let createdUser = null;

    try {
      createdUser = await userController.createUser(
        dtos.userRequestDtos.createUserRequestDto(req)
      );
    } catch (e) {
      return next(
        new userErrors.CommonUserError(e)
      );
    }

    setResponse(req, createdUser);
    next();
  }
};
