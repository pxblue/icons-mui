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
    d: "M12 23a11 11 0 1111-11 11 11 0 01-11 11zm0-20a9 9 0 109 9 9 9 0 00-9-9z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M17.58 7.83h-.72V6.68a.68.68 0 00-1.36 0v1.15h-1.43V6.68a.68.68 0 10-1.36 0v1.15h-1.43V6.68a.69.69 0 00-1.37 0v1.15H8.49V6.68a.69.69 0 00-1.37 0v1.15h-.7a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h.71v1.1a.69.69 0 001.37 0v-1.1h1.42v1.1a.69.69 0 001.37 0v-1.1h1.43v1.1a.68.68 0 001.36 0v-1.1h1.43v1.1a.68.68 0 101.36 0v-1.1h.71a.7.7 0 00.7-.7v-7a.7.7 0 00-.7-.7z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 23a11 11 0 1111-11 11 11 0 01-11 11zm0-20a9 9 0 109 9 9 9 0 00-9-9z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M17.58 7.83h-.72V6.68a.68.68 0 00-1.36 0v1.15h-1.43V6.68a.68.68 0 10-1.36 0v1.15h-1.43V6.68a.69.69 0 00-1.37 0v1.15H8.49V6.68a.69.69 0 00-1.37 0v1.15h-.7a.7.7 0 00-.7.7v7a.7.7 0 00.7.7h.71v1.1a.69.69 0 001.37 0v-1.1h1.42v1.1a.69.69 0 001.37 0v-1.1h1.43v1.1a.68.68 0 001.36 0v-1.1h1.43v1.1a.68.68 0 101.36 0v-1.1h.71a.7.7 0 00.7-.7v-7a.7.7 0 00-.7-.7z"
})), 'Pxgreen');
var _default = create;
exports["default"] = _default;