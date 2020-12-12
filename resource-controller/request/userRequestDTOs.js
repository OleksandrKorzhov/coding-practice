const getUserId = (body) => ({ id: body.query.id });

module.exports = {
  getUserId,
};