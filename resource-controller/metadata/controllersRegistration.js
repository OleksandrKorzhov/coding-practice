const express = require('express');
const { symbols, baseRoutes, methods } = require('./metaConstants');
const helpers = require('./helpers');

const prepareHandler = ({
    controller,
    handler,
    requestHandler,
    responseHandler,
}) => {
    let _handler = (...args) => handler.apply(controller, ...args);

    if (responseHandler) {
        _handler = (...args) => responseHandler(
            _handler(...args)
        );
    }

    if (requestHandler) {
        _handler = (req, res, next) => _handler(
            requestHandler(req.body),
            req,
            res,
            next
        );
    }

    return (req, res, next) => _handler(req, res, next);
}

const createPath = ({ basePath, uri }) => `${basePath}${uri}`;

const handler = (method, uri, handler) => ({
    method,
    uri,
    handler
});

const get = (uri, action) => handler(methods.GET, uri, action);
const post = (uri, action) => handler(methods.POST, uri, action);
const put = (uri, action) => handler(methods.PUT, uri, action);
const del = (uri, action) => handler(methods.DELETE, uri, action);

const registerController = ({ controller, handlers }) => {
    return {
        controller,
        handlers: handlers.map(({ method, uri, handler }) => {
            const _handler = typeof handler === 'function' ? handler : controller.prototype[handler];
            const action = helpers.funcName(_handler);

            return {
                method,
                uri,
                handler: _handler,
                action,
            };
        }),
        [symbols.CONTROLLER_DEF]: true,
    };
};

const registerHandler = ({
    router,
    basePath,
    handlerDef: { method, uri, handler, action },
    controller,
}) => {
    const url = createPath({ basePath, uri });
    let _handler = prepareHandler({
        controller,
        handler,
        requestHandler: helpers.getRequesthandlers(controller, action),
        responseHandler: helpers.getResponseHandlres(controller, action)
    });
    const middlewares = helpers.getMiddlewares(
        controller,
    );

    if (middlewares) {
        middlewares.push(_handler);
        _handler = middlewares;
    }

    switch (method) {
        case methods.GET:
            router.get(url, _handler);
            break;
        case methods.POST:
            router.post(url, _handler);
            break;
        case methods.PUT:
            router.put(url, _handler);
            break;
        case methods.DELETE:
            router.delete(url, _handler);
            break;
    }
};

const controllersRegistration = ({ app, controllersDef }) => {
    Object.entries(controllersDef)
        .forEach(([basePath, controllerDef]) => {
            let preparedController = null;
            /**
             * Check is custom controller
             */
            if (controllerDef[symbols.CONTROLLER_DEF]) {
                preparedController = controllerDef
            } else {
                console.log(controllerDef);
                preparedController = registerController({
                    controller: controllerDef,
                    handlers: Object.values(baseRoutes)
                });
            }

            const router = express.Router();
            preparedController.handlers.forEach(handler => registerHandler({
                basePath,
                router,
                controller: preparedController.controller,
                handlerDef: handler
            }));
            app.use(router);
        });
};




module.exports = {
    controllersRegistration,
    handler,
    get,
    post,
    put,
    del,
}
