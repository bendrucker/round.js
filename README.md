round.js [![Build Status](https://travis-ci.org/bendrucker/round.js.svg?branch=master)](https://travis-ci.org/bendrucker/round.js)
========

> Round numbers to the nearest multiple with an optional direction.

## Installing

```js
$ npm install --save round
```

## API

#### `round(value, [multiple], [direction])` -> `number`

##### value

*Required*  
Type: `number`

The value to round.

##### multiple

Type: `number`  
Default: `1`

The multiple to round to.

##### direction

Type: `string`  
Values: `up` / `down`

If no direction is supplied, the number will be rounded to the nearest direction, defaulting to up if the value is equidistant from the rounded values.

#### `round.down(value, multiple)` -> `number`

Convenience method for rounding down.

#### `round.up(value, multiple)` -> `number`

Convenience method for rounding up.
