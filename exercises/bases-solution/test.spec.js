const {testDestructuring} = require('./exo.js');

describe('Test exercise for bases', function () {

  let instanceToTest;

  it('Test testDestructuring() 1', () => {
    expect(testDestructuring([1,2,3], {name: 'plop'}, 1, 2, 'plop', 'test')).toBe('2plop4');
  });

  it('Test testDestructuring() 2', () => {
      expect(testDestructuring([1,2,3], {name: 'foo'}, 1, 2, 'plop')).toBe('2foo3');
  });

  it('Test testDestructuring() 3', () => {
      expect(testDestructuring([1,2,3], undefined, 1, 2, 'plop')).toBe('2toto3');
  });

});
