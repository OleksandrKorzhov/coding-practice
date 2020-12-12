const http = require('http');

console.log('Hello from server');
console.log('Big hello from server');

const server = http.createServer((request, response) => {
  response.write('Hello world');
  response.end();
});

server.listen(process.env.PORT, () => {
  console.log(`server listen on ${process.env.PORT}`);
});
