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
