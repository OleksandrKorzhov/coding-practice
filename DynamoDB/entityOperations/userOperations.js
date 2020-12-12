const aws = require('aws-sdk');
const { connectToDynamoDB, formatLogObj, getMockCb } = require('../utils');
const { dynamoDB } = require('../constants');

const db = connectToDynamoDB();
const docDb = new aws.DynamoDB.DocumentClient();

const createUser = (name, cb) => {
  const createUserSpec = {
    TableName: 'Users',
    Item: {
      username: { S: name },
    }
  };

  db.putItem(createUserSpec, getMockCb(cb));
};

const getUsersList = (cb) => {
  const querySpec = {
    TableName: 'Users',
  };

  db.scan(querySpec, getMockCb(cb));
};

const getUserByName = (name) => {
  const querySpec = {
    TableName: 'Users',
    Key: {
      username: { S: name }
    },
    // KeyConditionExpression: 'username = :name',
    // ExpressionAttributeValues: {
    //   ':name': { S: name }
    // }
  };

  db.getItem(querySpec, getMockCb());
};

const deleteUser = (name, cb) => {
  const operationSpec = {
    TableName: 'Users',
    Key: {
      'username': name
    },
    ReturnValues: dynamoDB.returnAllOld
  };

  docDb.delete(operationSpec, getMockCb(cb));
};

// createUser('Willie');
// getUsersList();
getUserByName('Willie');
// deleteUser('Willie');
