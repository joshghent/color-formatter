[![Dependency Status](https://david-dm.org/joshghent/color-formatter.svg)](https://david-dm.org/joshghent/color-formatter) [![Greenkeeper badge](https://badges.greenkeeper.io/joshghent/color-formatter.svg)](https://greenkeeper.io/)

![alt test](https://github.com/joshghent/color-formatter/raw/master/icons/color-formatter-96.png "Color Converter")

# Color Formatter
Convert colors of different formats with ease. Use it to convert a HEX color code value to an RGB triplet value or the other way round.

## Install
To add the module to your project, run:
```bash
npm install --save color-formatter
```

## Available functions
### getType(colorcode)
Find out the type of the color value.
```js
const Color = require('color-formatter');
/**
 * Get color type.
 * @param {string} colorcode - RGB or HEX value.
 */
Color.getType("255, 68, 133")
// => 'rgb'
Color.getType("#FF4485")
// => 'hex'
```

### toHex(rgb)
Convert an RGB color value to a HEX value.
```js
const Color = require('color-formatter');
/**
 * Get color type.
 * @param {string} rgb - RGB value.
 */
Color.toHex("255, 68, 133");
// => #FF4485
```

### toRGB(hex, asArray)
Convert a HEX color value to an RGB value.
```js
const Color = require('color-formatter');
/**
 * Get color type.
 * @param {string} hex - HEX value.
 * @param {boolean} asArray - (Optional) Set it to true to get the output as an array.
 */
Color.toRGB("#F8E100");
// => '248, 225, 0'
Color.toRGB("#F8E100", true);
// => [248, 255, 0]
```

## Usage
```js
//Include the module in your code
const Color = require('color-formatter');

const rgb = '255, 68, 133';
const hex = '#F8E100';

Color.getType(rgb)
// => 'rgb'

Color.toRGB(hex)
// => '248, 225, 0'

// OR

// Second argument of true means we want the output as an array
Color.toRGB(hex, true);
// => [248, 255, 0]


// You can also convert to hex
Color.toHex(rgb);
// => #FF4485
```

## License
MIT © [Josh Ghent](https://joshghent.com)
