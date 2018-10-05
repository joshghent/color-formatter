const Color = require('./index.js');
const assert = require('assert');

// assert.deepEqual(Color.toRGB('#F8E100'), '248, 225, 0');

assert.deepEqual(Color.toRgb('#000000'), '0,0,0');
assert.deepEqual(Color.toRgb('#010101'), '1,1,1');
assert.deepEqual(Color.toRgb('#101010'), '16,16,16');
assert.deepEqual(Color.toRgb('#111111'), '17,17,17');
assert.deepEqual(Color.toRgb('#000'), '0,0,0');
assert.deepEqual(Color.toRgb('#111'), '17,17,17');

assert.deepEqual(Color.toHex('100,200,255'), '#64C8FF');
