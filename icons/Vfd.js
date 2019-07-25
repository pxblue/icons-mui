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
    d: "M16.81 10.39h-.45v3.2h.34a1.24 1.24 0 001-.41 2 2 0 00.33-1.25 1.79 1.79 0 00-.31-1.16 1.16 1.16 0 00-.91-.38z"
  }), _react["default"].createElement("path", {
    d: "M20.27 6H3.73A1.74 1.74 0 002 7.73v8.54A1.74 1.74 0 003.73 18h16.54A1.74 1.74 0 0022 16.27V7.73A1.74 1.74 0 0020.27 6zM8 14.86H6.2L4.34 9.14h1.73L6.85 12a8.09 8.09 0 01.26 1.34c0-.18.06-.41.11-.68s.11-.49.15-.65l.79-2.91h1.73zm5.86-4.48H12v1.09h1.71v1.24H12v2.15h-1.5V9.14h3.38zm5 3.7a3 3 0 01-2.22.78h-1.82V9.14h2a3 3 0 012.13.71 2.67 2.67 0 01.74 2 3 3 0 01-.81 2.23z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z",
    opacity: ".01"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M16.81 10.39h-.45v3.2h.34a1.24 1.24 0 001-.41 2 2 0 00.33-1.25 1.79 1.79 0 00-.31-1.16 1.16 1.16 0 00-.91-.38z"
}), _react["default"].createElement("path", {
  d: "M20.27 6H3.73A1.74 1.74 0 002 7.73v8.54A1.74 1.74 0 003.73 18h16.54A1.74 1.74 0 0022 16.27V7.73A1.74 1.74 0 0020.27 6zM8 14.86H6.2L4.34 9.14h1.73L6.85 12a8.09 8.09 0 01.26 1.34c0-.18.06-.41.11-.68s.11-.49.15-.65l.79-2.91h1.73zm5.86-4.48H12v1.09h1.71v1.24H12v2.15h-1.5V9.14h3.38zm5 3.7a3 3 0 01-2.22.78h-1.82V9.14h2a3 3 0 012.13.71 2.67 2.67 0 01.74 2 3 3 0 01-.81 2.23z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z",
  opacity: ".01"
})), 'Vfd');
var _default = create;
exports["default"] = _default;