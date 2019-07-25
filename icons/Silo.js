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
    d: "M8.5 2a6.5 6.5 0 016.46 5.78L22 12v2l-2-1.2V22h-2V11.6l-3-1.8V22h-2V9H4v13H2V8.5A6.5 6.5 0 018.5 2m0 2C6.54 4 4.87 5.25 4.26 7h8.48c-.61-1.75-2.28-3-4.24-3M6 11h5v2H6v-2m0 4h5v2H6v-2m0 4h5v2H6v-2z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M8.5 2a6.5 6.5 0 016.46 5.78L22 12v2l-2-1.2V22h-2V11.6l-3-1.8V22h-2V9H4v13H2V8.5A6.5 6.5 0 018.5 2m0 2C6.54 4 4.87 5.25 4.26 7h8.48c-.61-1.75-2.28-3-4.24-3M6 11h5v2H6v-2m0 4h5v2H6v-2m0 4h5v2H6v-2z"
})), 'Silo');
var _default = create;
exports["default"] = _default;