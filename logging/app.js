require('dotenv').config();
const http = require('http');
const express = require('express');

const app = express();
const router = new express.Router();

router.use('/', (req, res) => {
  console.log(`Request from: ${JSON.stringify(req.connection.address())} with method ${req.method}`);
  res.statusCode = 200;
  res.setHeader( 'Content-Type', 'text/html');
  res.end('Hello world =)');
});

router.get('/metrics', (req, res) => {
  console.log('metrics');
});

app.use(router);

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
