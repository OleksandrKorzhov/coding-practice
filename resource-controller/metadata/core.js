const { controllersRegistration } = require('./controllersRegistration');

const registerMetadata = ({ app, controllers }) => {
  controllersRegistration({
    app,
    controllersDef: controllers,
  });
};

module.exports = {
  registerMetadata,
}
