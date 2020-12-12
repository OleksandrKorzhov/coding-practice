const express = require('express');
const router = express.Router();
const { userMiddlewares, finalMiddleware } = require('../middlewares');

router.get('/get-user-list',
  userMiddlewares.getUserList,
  finalMiddleware.sendResponse
);
router.get('/get-user',
  userMiddlewares.getUser,
  finalMiddleware.sendResponse,
);
router.post('/add-user',
  userMiddlewares.createUser,
  finalMiddleware.sendResponse
);

module.exports = router;
