/**
 * Async generators allow us use async/await with generators
 * @param max
 * @returns {AsyncIterableIterator<number>}
 */
async function* generateSequence(max) {
  let counter = 0;
  while (counter < max) {
    yield counter++;
  }
}

/**
 * To consume values from async generator we should put our for of loop into async function
 * @returns {Promise<void>}
 */
async function core() {
  const sequence = generateSequence(10);
  for await (const item of sequence) {
    console.log(item);
  }
}

core();
