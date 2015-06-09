round.js [![Build Status](https://travis-ci.org/bendrucker/round.js.svg?branch=master)](https://travis-ci.org/bendrucker/round.js)
========

Round numbers to the nearest multiple with an optional direction.

## Setup

```js
$ npm install round
```

## API

#### `round(value, multiple, [options])` -> `Number`
Rounds a number `value` to the nearest multiple. `options` (optional) can specify `options.direction` to `'up'` or `'down'` to specify the rounding direction. Otherwise, `round` will choose the nearest direction but default to `'up'` if `value` is equidistant from the rounded values.

#### `round.down(value, multiple)` -> `Number`

Shortcut for calling round with `options.direction = 'down'`.

#### `round.up(value, multiple)` -> `Number`

Shortcut for calling round with `options.direction = 'up'`.
