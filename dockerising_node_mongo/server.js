const express = require('express');
const mongoose = require('mongoose');
const { mongoConnect } = require('./src/db');

const app = express();

console.log('Start server');

const User = mongoose.model('user', { name: String });

mongoConnect();
mongoConnect.connection
  .on('open', () => console.log('Successfully connected to database'))
  .on('error', (err) => console.log(`Connection to mongodb failed =(.\n ${err.message}`));

app.use('/user/:username', (req, res, next) => {
  const { username } = req.params;

  User.create({ name: username })
    .then(userObj => res.json(userObj));
});

app.use('/user', (req, res, next) =>
  User.find()
    .then(userList => res.json(userList))
);

app.use('/', (req, res, next) => {
  res.send('Hello from docker container powered by nodemon');
});

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT} port.`);
});
