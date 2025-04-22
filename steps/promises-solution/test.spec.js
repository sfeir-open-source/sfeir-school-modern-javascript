const { exercise1Fn, exercise2Fn, exercise3Fn } = require('./exo.js');

jest.spyOn(console, 'log');

describe('Test exercise for promises', function () {
  beforeEach(() => {
    console.log.mockReset();
  });
  it('Exercise 1', (done) => {
    expect(exercise1Fn).toBeDefined();
    exercise1Fn().then((value) => {
      expect(value).toBe(undefined);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith('I love promise');
      console.log('exercise1Fn.then done()');
      done();
    });
  });

  it('Exercise 2', (done) => {
    expect(exercise2Fn).toBeDefined();
    exercise2Fn().then((value) => {
      expect(value).toBe(undefined);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenCalledWith('I hate rejection');
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
