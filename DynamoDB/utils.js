const aws = require('aws-sdk');

const connectToDynamoDB = () => {
  aws.config.update({
    region: 'us-east-1',
    entrypoint: 'localhost:8000'
  });

  return (new aws.DynamoDB());
};

const formatLogObj = (err) => {
  return JSON.stringify(err, null, 2);
};

const getMockCb = (cb) => (err, data) => {
  if (err) {
    return console.log(JSON.stringify(err, null, 2));
  }

  console.log(JSON.stringify(data, null, 2));
  cb && cb();
};

module.exports = {
  connectToDynamoDB,
  formatLogObj,
  getMockCb,
};
