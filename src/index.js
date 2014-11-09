'use strict';

var defaults = require('defaults');

function round (value, direction, multiple) {
  var method = direction === 'down' ? 'floor' : 'ceil';
  return Math[method](value / multiple) * multiple
}

module.exports = function (value, options) {
  options = defaults(options, {
    multiple: 1
  });
  if (options.direction) {
    return round(value, options.direction, options.multiple)
  }
  else {
    var down = round(value, 'down', options.multiple);
    var up = round(value, 'up', options.multiple);
    if ((value - down) > (up - value)) {
      return up;
    }
    else {
      return down;
    }
  }
};
