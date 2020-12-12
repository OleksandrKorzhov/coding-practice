const ResourceController = require('./resourceController');
const { UserModel } = require('../models');
const { userDTOs } = require('../request');

class UserController extends ResourceController {
  constructor() {
    super({
      dbModel: UserModel,
      requestParsers: userDTOs.getUserId
    });
  }
}

module.exports = UserController;

