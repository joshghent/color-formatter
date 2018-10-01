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
  }
};
module.exports = colorObj;
