const Color = require('./index.js');
const assert = require('assert');

assert.deepEqual(Color.toRgb('#F8E100'), '248,225,0');
assert.deepEqual(Color.toRgb('#FADE00', true), [250,222,0]);

assert.deepEqual(Color.toHex('100,200,255'), '#64C8FF');
