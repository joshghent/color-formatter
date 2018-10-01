const Color = require('./index.js');
const assert = require('assert');

// assert.deepEqual(Color.toRGB('#F8E100'), '248, 225, 0');

assert.deepEqual(Color.toHex('100,200,255'), '#64C8FF');
console.log(Color.toRgb('#64C8FF'));
