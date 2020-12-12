const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  database: 'postgres',
  password: 1111,
});

const run = async () => {
  await client.connect();

  return client;
};

if (module.parent) {
  module.exports = run;
} else {
  run();
}
