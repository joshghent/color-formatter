const Color = require("./index.js");
const assert = require("assert");

describe("Color Formatter", () => {
    describe("convert RGB color to HEX color", () => {
        it("should convert color rgb(100, 200, 255) to #64C8FF", () => {
            assert.deepEqual(Color.toHex("100,200,255"), "#64C8FF");
        });
    });

    /*describe("convert HEX color to RGB color", () => {
        it("should convert #F8E100 to rgb(248, 225, 0)", () => {
            assert.deepEqual(Color.toRGB("#F8E100"), "248, 225, 0");
        });
    });*/

    describe("autodetect color type and return it", () => {
      it("should detect hex types if this one is a valid color", () => {
        assert.deepEqual(Color.getType("#000000"), "hex");
        assert.deepEqual(Color.getType("#000"), "hex");
        assert.deepEqual(Color.getType("#ABC"), "hex");
        assert.deepEqual(Color.getType("#abc"), "hex");
        assert.deepEqual(Color.getType("#aBc"), "hex");
        assert.deepEqual(Color.getType("#A01"), "hex");
      });

      it("should return undefined if the HEX color is invalid", () => {
        assert.deepEqual(typeof Color.getType("000000"), "undefined");
        assert.deepEqual(typeof Color.getType("#1234"), "undefined");
        assert.deepEqual(typeof Color.getType("#12345"), "undefined");
        assert.deepEqual(typeof Color.getType("#12345X"), "undefined");
      });

      it("should detect the RGB type and return it if this one is a valid color", () => {
        assert.deepEqual(Color.getType("0, 0, 0"), "rgb");
        assert.deepEqual(Color.getType("255, 255, 255"), "rgb");
        assert.deepEqual(Color.getType("123, 123, 123"), "rgb");
      });

      it("should return undefined if the RGB color is invalid", () => {
        assert.deepEqual(typeof Color.getType("0, 0, 256"), "undefined");
        assert.deepEqual(typeof Color.getType("0, 0, 01"), "undefined");
        assert.deepEqual(typeof Color.getType("255, 255, 0255"), "undefined");
        assert.deepEqual(typeof Color.getType("10, 10, 1000"), "undefined");
        assert.deepEqual(typeof Color.getType("1,1,1"), "undefined");
        assert.deepEqual(typeof Color.getType(" 1, 1, 1"), "undefined");
        assert.deepEqual(typeof Color.getType("1, 1, 1 "), "undefined");
      });
    });
});
