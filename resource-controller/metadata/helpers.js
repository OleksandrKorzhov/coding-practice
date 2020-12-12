const fields = {
  middlewares: '_middlewares',
  requestHandler: '_requestHandler',
  responseHandler: '_responseHandler',
};

const setMiddlewares = (obj, middlewares) =>
  obj[fields.middlewares] = middlewares;

const setResuestHandlers = (obj, requestHandlers) =>
  obj[fields.requestHandler] = requestHandlers;

const setResponseHandlers = (obj, requestHandlers) =>
  obj[fields.responseHandler] = requestHandlers;

const getMiddlewares = (obj) => obj[fields.middlewares];
const getRequesthandlers = (obj, actionName) => (obj[fields.requestHandler] || {})[actionName];
const getResponseHandlres = (obj, actionName) => (obj[fields.responseHandler] || {})[actionName];

const funcName = (fn) => fn.name || fn.displayName;

module.exports = {
  setMiddlewares,
  setResuestHandlers,
  setResponseHandlers,
  getMiddlewares,
  getRequesthandlers,
  getResponseHandlres,
  funcName,
};
