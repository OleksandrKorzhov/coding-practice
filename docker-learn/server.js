const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.send('Hello world =)');
});

app.listen(3200, () => {
  console.log('Server is running');
});
