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
    d: "M11 21v-4.3c-.5.2-1 .3-1.5.3C7 17 5 15 5 12.5c0-1.3.5-2.4 1.4-3.2-.3-.6-.4-1.2-.4-1.8C6 5 8 3 10.5 3c1.6 0 2.9.8 3.8 2h.2c3 0 5.5 2.5 5.5 5.5S17.5 16 14.5 16c-.5 0-1-.1-1.5-.2V21h-2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M11 21v-4.3c-.5.2-1 .3-1.5.3C7 17 5 15 5 12.5c0-1.3.5-2.4 1.4-3.2-.3-.6-.4-1.2-.4-1.8C6 5 8 3 10.5 3c1.6 0 2.9.8 3.8 2h.2c3 0 5.5 2.5 5.5 5.5S17.5 16 14.5 16c-.5 0-1-.1-1.5-.2V21h-2z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Tree');
var _default = create;
exports["default"] = _default;