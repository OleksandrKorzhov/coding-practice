const connect = require('./connect');
const faker = require('Faker');

(async () => {
  let values = '';
  const conn = await connect();
  for (let i = 0; i < 10000; i++) {
    try {
      await conn.query(`
      INSERT INTO
        users(first_name, last_name, age)
        VALUES($1::text, $2::text, $3::integer);`,
        [
          faker.Name.firstName(),
          faker.Name.lastName(),
          Math.round(100 * Math.random()),
        ]);
    } catch (e) {
      console.error(`Error from PG: ${e.message}`);
    }
  }

  console.log(values);

  conn.end();
})();
