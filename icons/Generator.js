"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("@material-ui/icons/utils/createSvgIcon"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var create = parseInt(24, 10) !== 24 ? function (props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: '0 0 ' + 24 + ' ' + 24
  }, props), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), _react["default"].createElement("path", {
    fill: "#fff",
    d: "M12.15 11.34h4.24v5.56a12.09 12.09 0 01-1.94.47 12.73 12.73 0 01-1.86.13 4.74 4.74 0 01-3.71-1.42A5.93 5.93 0 017.61 12a5.37 5.37 0 011.48-4 5.62 5.62 0 014.11-1.5 8 8 0 013.18.66L15.63 9a5.43 5.43 0 00-2.44-.58 3 3 0 00-2.36 1A3.85 3.85 0 009.94 12a4.27 4.27 0 00.72 2.67 2.45 2.45 0 002.07.91 7.19 7.19 0 001.45-.14v-2.21h-2z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), _react["default"].createElement("path", {
  fill: "#fff",
  d: "M12.15 11.34h4.24v5.56a12.09 12.09 0 01-1.94.47 12.73 12.73 0 01-1.86.13 4.74 4.74 0 01-3.71-1.42A5.93 5.93 0 017.61 12a5.37 5.37 0 011.48-4 5.62 5.62 0 014.11-1.5 8 8 0 013.18.66L15.63 9a5.43 5.43 0 00-2.44-.58 3 3 0 00-2.36 1A3.85 3.85 0 009.94 12a4.27 4.27 0 00.72 2.67 2.45 2.45 0 002.07.91 7.19 7.19 0 001.45-.14v-2.21h-2z"
})), 'Generator');
var _default = create;
exports["default"] = _default;