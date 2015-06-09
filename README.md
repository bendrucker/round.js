round.js [![Build Status](https://travis-ci.org/bendrucker/round.js.svg?branch=master)](https://travis-ci.org/bendrucker/round.js)
========

> Round numbers to the nearest multiple with an optional direction.

## Installing

```js
$ npm install --save round
```

## API

#### `round(value, [multiple], [options])` -> `number`

##### value

*Required*  
Type: `number`

The value to round.

##### multiple

Type: `number`  
Default: `1`

The multiple to round to.

##### options

Type: `object`

An object with:

* direction:
  * type: `string`
  * values: `'up'`, '`down'`

If no direction is supplied, the number will be rounded to the nearest direction, defaulting to up if the value is equidistant from the rounded values.

#### `round.down(value, multiple)` -> `number`

Shortcut for calling round with `options.direction = 'down'`.

#### `round.up(value, multiple)` -> `number`

Shortcut for calling round with `options.direction = 'up'`.
