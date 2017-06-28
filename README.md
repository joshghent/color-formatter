# Color Converter
> Convert colors of different formats with ease

## Install
```bash
npm install --save color-converter
```

## Usage
```js
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