const {totalAmount} = require('./exo.js');

describe('Test exercise for functional', function () {

  it('Is create correctly', () => expect(totalAmount).toEqual(70));

});
