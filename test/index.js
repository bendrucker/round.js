var round  = require('../');
var expect = require('chai').expect;

describe('round', function () {

  it('defaults to the nearest integer', function () {
    expect(round(29.99)).to.equal(30);
  });

  it('can round up', function () {
    expect(round.up(26, 5)).to.equal(30);
  });

  it('can round down', function () {
    expect(round.down(26.5, 5)).to.equal(25);
  });

  it('can round to the nearest multiple in either direction', function () {
    expect(round(26.5, 5)).to.equal(25);
    expect(round(28, 5)).to.equal(30);
  });

  it('rounds down when value is equidistant from rounded values', function () {
    expect(round(27.5, 5)).to.equal(25);
  });

  it('can handle decimals', function () {
    expect(round(0.45, 0.5)).to.equal(0.5);
  });

});
