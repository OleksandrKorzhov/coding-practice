const { model: userModel } = require('../models/user');

const getUserListMongoStrategy = ({ offset, limit }) => (
  userModel
    .find({ skip: offset, limit })
    .exec()
);

const getUserByIdMongoStrategy = ({ id }) => (
  userModel.findById(id)
    .exec()
);

const addUserMongoStrategy = ({ firstName, lastName }) => (
  userModel.create({ firstName, lastName })
    .save()
);

module.exports = {
  getUserListMongoStrategy,
  getUserByIdMongoStrategy,
  addUserMongoStrategy,
};
