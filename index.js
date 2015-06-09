'use strict'

var ap = require('ap')

exports = module.exports = round

var methods = {
  down: 'floor',
  up: 'ceil'
}

function round (value, multiple, direction) {
  multiple = multiple || 1
  if (direction) {
    if (!methods.hasOwnProperty(direction)) {
      throw new Error('invalid direction')
    }
    var method = methods[direction]
    return Math[method](value / multiple) * multiple
  }
  var down = round(value, multiple, 'down')
  var up = round(value, multiple, 'up')
  if ((value - down) < (up - value)) {
    return down
  }
  return up
}

Object
  .keys(methods)
  .forEach(function (direction) {
    exports[direction] = ap.partialRight(round, direction)
  })
