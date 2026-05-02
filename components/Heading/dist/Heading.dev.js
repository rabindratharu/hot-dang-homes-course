"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Heading = void 0;

var _react = _interopRequireDefault(require("react"));

var _fonts = require("../../utils/fonts.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Heading = function Heading(_ref) {
  var textAlign = _ref.textAlign,
      content = _ref.content,
      level = _ref.level;

  var tag = _react["default"].createElement("h".concat(level), {
    className: "".concat((0, _fonts.getTextAlign)(textAlign), " ").concat((0, _fonts.getFontSize)(level), " max-w-5xl mx-auto my-5"),
    dangerouslySetInnerHTML: {
      __html: content
    }
  });

  return tag;
};

exports.Heading = Heading;