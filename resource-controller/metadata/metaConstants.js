const symbols = {
  CONTROLLER_DEF: Symbol.for('CONTROLLER_DEF'),
};

const methods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT'
};

const baseRoutes = {
  GET_ONE: {
    uri: '/get-one',
    method: methods.GET,
    handler: 'getOne'
  },
  GET_MANY: {
    uri: '/get-many',
    method: methods.GET,
    handler: 'getMany'
  },
  ADD_ONE: {
    uri: '/add-one',
    method: methods.POST,
    handler: 'addOne'
  },
  ADD_MANY: {
    uri: '/add-many',
    method: methods.POST,
    handler: 'addMany'
  },
  UPDATE_ONE: {
    uri: '/update-one',
    method: methods.PUT,
    handler: 'updateOne',
  },
  UPDATE_MANY: {
    uri: '/update-many',
    method: methods.PUT,
    handler: 'updateMany'
  },
  DELETE_ONE: {
    uri: '/delete-one',
    method: methods.DELETE,
    handler: 'deleteOne',
  },
  DELETE_MANY: {
    uri: '/delete-many',
    method: methods.DELETE,
    handler: 'deleteMany'
  },
};


module.exports = {
  symbols,
  baseRoutes,
  methods,
};
