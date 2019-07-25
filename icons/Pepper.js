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
  }, props), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
    d: "M20 8.73a3 3 0 00-3-2.83 3.11 3.11 0 00-1.52.4 4.82 4.82 0 00-1.55-1 3 3 0 011.6-1.52L14.8 2A5 5 0 0012 5a2.91 2.91 0 00-3 1.92 15.34 15.34 0 00-.41 3.57 23.33 23.33 0 001.05 5.62A10.39 10.39 0 017.56 11a12.36 12.36 0 01.22-4.3 5.7 5.7 0 00-1.37 0A2.86 2.86 0 004 9.2c-.21 2.68 1.16 7.64 2 9.93C6.51 20.51 7.8 22 9 22c.87-.06 1.53 0 2-.95a3.73 3.73 0 003.37.95A4.69 4.69 0 0018 19.13a25.1 25.1 0 002-10.4z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M20 8.73a3 3 0 00-3-2.83 3.11 3.11 0 00-1.52.4 4.82 4.82 0 00-1.55-1 3 3 0 011.6-1.52L14.8 2A5 5 0 0012 5a2.91 2.91 0 00-3 1.92 15.34 15.34 0 00-.41 3.57 23.33 23.33 0 001.05 5.62A10.39 10.39 0 017.56 11a12.36 12.36 0 01.22-4.3 5.7 5.7 0 00-1.37 0A2.86 2.86 0 004 9.2c-.21 2.68 1.16 7.64 2 9.93C6.51 20.51 7.8 22 9 22c.87-.06 1.53 0 2-.95a3.73 3.73 0 003.37.95A4.69 4.69 0 0018 19.13a25.1 25.1 0 002-10.4z"
})), 'Pepper');
var _default = create;
exports["default"] = _default;