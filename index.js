var colorObj = {
  getType: function (colorStr) {
    const hexRegex = /^#([A-F0-9]{3}|[A-F0-9]{6})$/i;

    const rgbRegex = /^(([0-9]|([1-9][0-9])|(1[0-9][0-9])|2[0-4][0-9]|25[0-5]), ){2}([0-9]|([1-9][0-9])|(1[0-9][0-9])|2[0-4][0-9]|25[0-5])$/;

    if (hexRegex.test(colorStr)) {
      return 'hex';
    }

    if (rgbRegex.test(colorStr)) {
      return 'rgb';
    }

    return undefined
  },
  toHex: function (rgbStr) {
    // expect 1 parameters ;
    // break up into 3 parts;
    var nums = rgbStr.split(',');
    var hexNums = nums.map(function (number) {
      number = parseInt(number, 10);
      var hex = (number).toString(16);
      return hex.toUpperCase();
    });
    return '#' + hexNums.toString().replace(/,/g, '');
  },
  toRgb: function (hexStr) {
    var nums = [];
    if (hexStr.length === 4) {
      nums.push(parseInt(hexStr.charAt(1), 16));
      nums.push(parseInt(hexStr.charAt(2), 16));
      nums.push(parseInt(hexStr.charAt(3), 16));
    } else if (hexStr.length === 7) {
      nums.push(parseInt(hexStr.charAt(1) + hexStr.charAt(2), 16));
      nums.push(parseInt(hexStr.charAt(3) + hexStr.charAt(4), 16));
      nums.push(parseInt(hexStr.charAt(5) + hexStr.charAt(7), 16));
    } else {
      // error
    }
    return nums.toString();
  }
};
module.exports = colorObj;
