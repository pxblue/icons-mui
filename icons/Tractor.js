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
    d: "M5 4v7.26c-1.8.64-3 2.34-3 4.24C2 18 4 20 6.5 20c2.29 0 4.21-1.72 4.47-4h4.2c-.11.32-.17.66-.17 1 0 1.66 1.34 3 3 3s3-1.34 3-3c0-.34-.06-.68-.18-1H22v-3c0-1.11-.89-2-2-2h-4.96l-1.39-7H5m2 2h5l1 5v3h-2.26A4.53 4.53 0 007 11.03V6m-.5 7.25c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25M18 15.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M5 4v7.26c-1.8.64-3 2.34-3 4.24C2 18 4 20 6.5 20c2.29 0 4.21-1.72 4.47-4h4.2c-.11.32-.17.66-.17 1 0 1.66 1.34 3 3 3s3-1.34 3-3c0-.34-.06-.68-.18-1H22v-3c0-1.11-.89-2-2-2h-4.96l-1.39-7H5m2 2h5l1 5v3h-2.26A4.53 4.53 0 007 11.03V6m-.5 7.25c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25M18 15.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Tractor');
var _default = create;
exports["default"] = _default;