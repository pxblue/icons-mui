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
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M21 2H3a2 2 0 00-2 2v12a2 2 0 002 2h3.57L8 23l2-2 2 2 2-2 2 2 1.43-5H21a2 2 0 002-2V4a2 2 0 00-2-2m0 14h-3v-2h-1V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5H6v2H3V4h18v12M9 14V9h6v5z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M21 2H3a2 2 0 00-2 2v12a2 2 0 002 2h3.57L8 23l2-2 2 2 2-2 2 2 1.43-5H21a2 2 0 002-2V4a2 2 0 00-2-2m0 14h-3v-2h-1V9a2 2 0 00-2-2H9a2 2 0 00-2 2v5H6v2H3V4h18v12M9 14V9h6v5z"
})), 'BasketballHoop');
var _default = create;
exports["default"] = _default;