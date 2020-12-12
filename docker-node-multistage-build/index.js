const express = require('express');
console.log('Hello from node');
const app = express();

app.listen(3000, () => console.log('app listen on 3000 port'));
