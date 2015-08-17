'use strict'

var roundPrecision = require('round-precision')
var precision = require('precision')

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
    return roundPrecision(Math[method](value / multiple) * multiple, precision(multiple))
  }
  var down = round(value, multiple, 'down')
  var up = round(value, multiple, 'up')
  if ((value - down) < (up - value)) {
    return down
  }
  return up
}

round.up = function roundUp (value, multiple) {
  return round(value, multiple, 'up')
}

round.down = function roundDown (value, multiple) {
  return round(value, multiple, 'down')
}
