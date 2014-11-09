var round  = require('../');
var expect = require('chai').expect;

describe('round', function () {

  it('can round up', function () {
    expect(round(26.5, {
      direction: 'up',
      multiple: 5
    }))
    .to.equal(30);
  });

  it('can round down', function () {
    expect(round(26.5, {
      direction: 'down',
      multiple: 5
    }))
    .to.equal(25);
  });

  it('can round to the nearest multiple in either direction', function () {
    expect(round(26.5, {
      multiple: 5
    }))
    .to.equal(25);
    expect(round(28, {
      multiple: 5
    }))
    .to.equal(30);
  });

  it('rounds down when value is equidistant from rounded values', function () {
    expect(round(27.5, {
      multiple: 5
    }))
    .to.equal(25);
  });

});
