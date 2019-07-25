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
    d: "M12 2a9.81 9.81 0 00-6.5 2.4 8.64 8.64 0 011.3 1.4l1.1-.6 1 1.7-1 .6a9.53 9.53 0 011 3.5H10v2H8.9a8.9 8.9 0 01-1.1 3.6l1 .6-1 1.7-1.1-.6a8.64 8.64 0 01-1.3 1.4 10 10 0 006.5 2.4 9.81 9.81 0 006.5-2.4 8.64 8.64 0 01-1.3-1.4l-1.1.6-1-1.7 1-.6a11 11 0 01-1.1-3.5H14v-2h1.1a8.9 8.9 0 011.1-3.6l-1-.6 1-1.7 1.1.6a8.64 8.64 0 011.3-1.4A10.28 10.28 0 0012 2M4.1 5.8A10.52 10.52 0 002 12a9.79 9.79 0 002.1 6.1l.9-.9-.6-.3 1-1.7.7.4a7.86 7.86 0 00.8-2.6H6v-2h.9a7.86 7.86 0 00-.8-2.6l-.7.5-1-1.7.6-.3a2.44 2.44 0 00-.9-1.1m15.8 0l-.9.9.6.3-1 1.7-.7-.4a7.86 7.86 0 00-.8 2.6h.9v2h-.9a7.86 7.86 0 00.8 2.6l.7-.4 1 1.7-.6.4a7.64 7.64 0 00.9.9A10 10 0 0022 12a10.52 10.52 0 00-2.1-6.2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 2a9.81 9.81 0 00-6.5 2.4 8.64 8.64 0 011.3 1.4l1.1-.6 1 1.7-1 .6a9.53 9.53 0 011 3.5H10v2H8.9a8.9 8.9 0 01-1.1 3.6l1 .6-1 1.7-1.1-.6a8.64 8.64 0 01-1.3 1.4 10 10 0 006.5 2.4 9.81 9.81 0 006.5-2.4 8.64 8.64 0 01-1.3-1.4l-1.1.6-1-1.7 1-.6a11 11 0 01-1.1-3.5H14v-2h1.1a8.9 8.9 0 011.1-3.6l-1-.6 1-1.7 1.1.6a8.64 8.64 0 011.3-1.4A10.28 10.28 0 0012 2M4.1 5.8A10.52 10.52 0 002 12a9.79 9.79 0 002.1 6.1l.9-.9-.6-.3 1-1.7.7.4a7.86 7.86 0 00.8-2.6H6v-2h.9a7.86 7.86 0 00-.8-2.6l-.7.5-1-1.7.6-.3a2.44 2.44 0 00-.9-1.1m15.8 0l-.9.9.6.3-1 1.7-.7-.4a7.86 7.86 0 00-.8 2.6h.9v2h-.9a7.86 7.86 0 00.8 2.6l.7-.4 1 1.7-.6.4a7.64 7.64 0 00.9.9A10 10 0 0022 12a10.52 10.52 0 00-2.1-6.2z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Baseball');
var _default = create;
exports["default"] = _default;