const { exercise1Fn, exercise2Fn, exercise3Fn } = require('./exo.js');

describe('Test exercise for promises', function () {
  let spyConsoleLog = undefined;

  beforeEach(() => {
    spyConsoleLog = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Exercise 1', (done) => {
    expect(exercise1Fn).toBeDefined();
    exercise1Fn().then((value) => {
      expect(value).toBe(undefined);
      expect(spyConsoleLog).toHaveBeenCalledTimes(1);
      expect(spyConsoleLog).toHaveBeenCalledWith('I love promise');
      done();
    });
  });

  it('Exercise 2', (done) => {
    expect(exercise2Fn).toBeDefined();
    exercise2Fn().then((value) => {
      expect(value).toBe(undefined);
      expect(spyConsoleLog).toHaveBeenCalledTimes(1);
      expect(spyConsoleLog).toHaveBeenCalledWith('I hate rejection');
      done();
    });
  });

  it('Exercise 3', (done) => {
    expect(exercise3Fn).toBeDefined();
    exercise3Fn().then((value) => {
      expect(value).toBe(8);
      done();
    });
  });
});
