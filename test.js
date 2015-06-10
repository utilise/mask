var expect = require('chai').expect
  , mask = require('./')

describe('mask', function() {
  it('should mask objects', function() {
    var o = { foo: '1', bar: 2 }
    expect(mask('foo')(o)).to.eql({ foo: '1' })
  })
})