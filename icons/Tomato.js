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
    d: "M13 2a11.32 11.32 0 00-1 2c-.12.33-.22.66-.31 1-.62-1.74-3.5-1.46-4.69-2 0 3.38 3.52 2.21 4.25 2.72C8.42 5.48 7.39 7.39 6 8c3.1 1.57 5 .06 5.72-1.84-.11.74-.65 4.92 2.28 4.84a8.14 8.14 0 00-1.31-4.91h.06C14 7.59 15.94 9.3 18 8a7.19 7.19 0 00-3.75-2.06C15.84 6 16.91 6.13 18 4a8.42 8.42 0 00-4.69 1c.47-.8 1.18-2 1.69-3zM7 5c-3.91.89-5 4.23-5 8 0 5 4.47 9 10 9 4.89 0 10-2.84 10-10 0-3-1.17-6-4-7a1.88 1.88 0 01-1 1c.54.19 1.42 1.39 2 2-.31.81-1.8 1.52-4.34 1a9.86 9.86 0 010 3 4.07 4.07 0 01-4-3C8.25 10.5 4.93 8.68 5 8c.88-.61 2-1.83 3-2a2.82 2.82 0 01-1-1z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M13 2a11.32 11.32 0 00-1 2c-.12.33-.22.66-.31 1-.62-1.74-3.5-1.46-4.69-2 0 3.38 3.52 2.21 4.25 2.72C8.42 5.48 7.39 7.39 6 8c3.1 1.57 5 .06 5.72-1.84-.11.74-.65 4.92 2.28 4.84a8.14 8.14 0 00-1.31-4.91h.06C14 7.59 15.94 9.3 18 8a7.19 7.19 0 00-3.75-2.06C15.84 6 16.91 6.13 18 4a8.42 8.42 0 00-4.69 1c.47-.8 1.18-2 1.69-3zM7 5c-3.91.89-5 4.23-5 8 0 5 4.47 9 10 9 4.89 0 10-2.84 10-10 0-3-1.17-6-4-7a1.88 1.88 0 01-1 1c.54.19 1.42 1.39 2 2-.31.81-1.8 1.52-4.34 1a9.86 9.86 0 010 3 4.07 4.07 0 01-4-3C8.25 10.5 4.93 8.68 5 8c.88-.61 2-1.83 3-2a2.82 2.82 0 01-1-1z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Tomato');
var _default = create;
exports["default"] = _default;