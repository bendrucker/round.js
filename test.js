'use strict'

var test = require('tape')
var round = require('./')

test('round', function (t) {
  t.equal(round(29.99), 30)

  t.equal(round(26, 5, 'up'), 30)
  t.equal(round(26.5, 5, 'down'), 25)

  t.equal(round.up(26, 5), 30)
  t.equal(round.down(26.5, 5), 25)

  t.equal(round(26.5, 5), 25)
  t.equal(round(28, 5), 30)
  t.equal(round(27.5, 5), 30)
  t.equal(round(0.45, 0.5), 0.5)

  t.equal(round(0.6123, 0.2), 0.6)

  t.end()
})
