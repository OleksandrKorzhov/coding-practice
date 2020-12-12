const { connectToDynamoDB, getMockCb } = require('../utils');
const { dynamoDB: db } = require('../constants');

const dynamoDB = connectToDynamoDB();

const createUsersTable = (cb) => {
  const query = {
    TableName: 'Users',
    KeySchema: [
      { AttributeName: 'username', KeyType: db.hashKeyType },
    ],
    AttributeDefinitions: [
      { AttributeName: 'username', AttributeType: db.stringType },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10
    }
  };

  dynamoDB.createTable(query, getMockCb(cb));
};

const deleteUserTable = () => {
  const deleteSpec = {
    TableName: 'Users'
  };

  dynamoDB.deleteTable(deleteSpec, getMockCb());
};

createUsersTable();
// deleteUserTable();
