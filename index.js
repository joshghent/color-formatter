var colorObj = {
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
      nums.push(parseInt(hexStr.charAt(1) + hexStr.charAt(1), 16));
      nums.push(parseInt(hexStr.charAt(2) + hexStr.charAt(2), 16));
      nums.push(parseInt(hexStr.charAt(3) + hexStr.charAt(3), 16));
    } else if (hexStr.length === 7) {
      nums.push(parseInt(hexStr.charAt(1) + hexStr.charAt(2), 16));
      nums.push(parseInt(hexStr.charAt(3) + hexStr.charAt(4), 16));
      nums.push(parseInt(hexStr.charAt(5) + hexStr.charAt(6), 16));
    } else {
      // error
    }
    return nums.toString();
  }
};
module.exports = colorObj;
