const connect = require('./connect');

;(async () => {
  const ctx = await connect();

  const users = await ctx.query(`
    CREATE TABLE users (
      username SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL DEFAULT '',
      last_name TEXT NOT NULL DEFAULT '',
      age SMALLINT NOT NULL
    );
  `);

  console.log(users);
})();

