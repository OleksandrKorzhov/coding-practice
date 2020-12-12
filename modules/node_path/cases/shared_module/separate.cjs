console.log('separate module');

let counter = 0;

module.exports = {
  name: 'separate module',
  inc() {
    counter++;
  },
  getCounter() {
    return counter;
  }
};
