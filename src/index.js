'use strict';

var defaults = require('defaults');

function roundDirection (value, direction, multiple) {
  var method = direction === 'down' ? 'floor' : 'ceil';
  return Math[method](value / multiple) * multiple
}

var round = module.exports = function (value, multiple, options) {
  multiple = multiple || 1;
  options = options || {};
  if (options.direction) {
    return roundDirection(value, options.direction, multiple)
  }
  else {
    var down = roundDirection(value, 'down', multiple);
    var up = roundDirection(value, 'up', multiple);
    if ((value - down) > (up - value)) {
      return up;
    }
    else {
      return down;
    }
  }
};

round.up = function (value, multiple, options) {
  return round(value, multiple, {
    direction: 'up'
  });
};

round.down = function (value, multiple, options) {
  return round(value, multiple, {
    direction: 'down'
  });
};
