const {generator} = require('./exo.js');

describe('Test exercise for classes', function () {

  let instanceToTest;

  beforeEach(() => {
    instanceToTest = generator();
  });

  it('Fibonacci rocks', () => {
    expect(instanceToTest.next().value).toBe(0);
    expect(instanceToTest.next().value).toBe(1);
    expect(instanceToTest.next().value).toBe(1);
    expect(instanceToTest.next().value).toBe(2);
    expect(instanceToTest.next().value).toBe(3);
    expect(instanceToTest.next().value).toBe(5);
    expect(instanceToTest.next().value).toBe(8);    
  });

});
