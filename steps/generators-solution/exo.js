const generator = function* () {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
};

const generatoRecursive = function* (current = 0, next = 1) {
  yield current;
  yield* generatoRecursive(next, current + next);
};

module.exports = { generator, generatoRecursive };
