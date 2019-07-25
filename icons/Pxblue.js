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
    r: "4"
  }), _react["default"].createElement("path", {
    d: "M21.5 12a9.22 9.22 0 00-3.14-6.36A8.71 8.71 0 0120.5 12a8.28 8.28 0 01-2.84 5.66A8 8 0 119.39 4.45a3 3 0 10-.33-2 10 10 0 1010 16.63A9.7 9.7 0 0021.5 12zM12 2a1 1 0 11-1 1 1 1 0 011-1z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), _react["default"].createElement("path", {
  d: "M21.5 12a9.22 9.22 0 00-3.14-6.36A8.71 8.71 0 0120.5 12a8.28 8.28 0 01-2.84 5.66A8 8 0 119.39 4.45a3 3 0 10-.33-2 10 10 0 1010 16.63A9.7 9.7 0 0021.5 12zM12 2a1 1 0 11-1 1 1 1 0 011-1z"
})), 'Pxblue');
var _default = create;
exports["default"] = _default;