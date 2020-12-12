const { MongoClient } = require('mongodb');
const { url } = require('../config/config');

const run = async () => {
  try {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const connection = await client.connect();

    console.log('Successfully connected to mongoDB');
    return connection;
  } catch (e) {
    console.error(e.stack);
  }
};

if (module.parent) {
  module.exports = run;
} else {
  run();
}
