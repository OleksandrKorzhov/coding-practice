// const someModule = require('someModule'); require NODE_PATH
const someModule = require('./someModule');

doSomething = () => {
  console.log('it works');
};

doSomething();

console.log(doSomething);
console.log('doSomething' in this);
console.log('doSomething' in module);
console.log('doSomething' in global);

console.log(this === module);
console.log(this === module.exports);
console.log(this === global);


// module code - counter.js
let counter = 1;

const increment = () => {
  counter += 1;
};

const decrement = () => {
  counter -= 1;
};

module.exports = {
  counter,
  increment,
  decrement,
};

// another module
const counterModule = require('./counter');

console.log(counterModule.counter);

counterModule.increment();

console.log(counterModule.counter);
