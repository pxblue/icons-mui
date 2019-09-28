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
    d: "M5 3v18h6v-3.5h2V21h6V3H5m2 2h2v2H7V5m4 0h2v2h-2V5m4 0h2v2h-2V5M7 9h2v2H7V9m4 0h2v2h-2V9m4 0h2v2h-2V9m-8 4h2v2H7v-2m4 0h2v2h-2v-2m4 0h2v2h-2v-2m-8 4h2v2H7v-2m8 0h2v2h-2v-2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M5 3v18h6v-3.5h2V21h6V3H5m2 2h2v2H7V5m4 0h2v2h-2V5m4 0h2v2h-2V5M7 9h2v2H7V9m4 0h2v2h-2V9m4 0h2v2h-2V9m-8 4h2v2H7v-2m4 0h2v2h-2v-2m4 0h2v2h-2v-2m-8 4h2v2H7v-2m8 0h2v2h-2v-2z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Building');
var _default = create;
exports["default"] = _default;