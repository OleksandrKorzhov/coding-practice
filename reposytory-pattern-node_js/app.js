const express = require('express');
const bodyParser = require('body-parser');
const { server } = require('./config');
const { connect, dataStrategies, repositories } = require('./db');
const { registry } = require('./core');
const routes = require('./routes');
const { finalMiddleware } = require('./middlewares');

/**
 * Configuring service locator
 * It will be used for providing services
 * without disclosing pecularities of access to them
 */
registry.setUserListFetchingStrategy(dataStrategies.userStrategies.getUserListMongoStrategy);
registry.setUserFetchingByIdStrategy(dataStrategies.userStrategies.getUserByIdMongoStrategy);
registry.setUserAddStrategy(dataStrategies.userStrategies.addUserMongoStrategy);
registry.setUserRepository(repositories.userRepository);

/**
 * Connect to database
 */
connect()
  .then(() => console.log('Connection to db established!'))
  .catch((err) => console.error(`Connection to db failed. Message: ${err.message}`));

/**
 * application startup
 */
const app = express();
app.use(bodyParser.json());

app.use(routes);

/**
 * instantiate error handling
 */
app.use(finalMiddleware.handleError);

app.listen(server.PORT, () => {
  console.log(`Server listen on ${server.PORT} port.`);
});
