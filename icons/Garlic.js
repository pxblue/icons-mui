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
    d: "M12.42 2l-.5.41-.72.59H9.05v5a1 1 0 01-1 1H7.8A6.12 6.12 0 002 15.09v.1A6.21 6.21 0 008.05 21a7.26 7.26 0 00.95-.06 4.93 4.93 0 006.1 0 7.77 7.77 0 001 .06 6.09 6.09 0 006-5.88A6 6 0 0016.18 9h-.13a1 1 0 01-1-1V3.41l-.53-.29L13 2.31zm.22 2.41l.41.18V8a3 3 0 003 3h.09a4 4 0 01.5 7.94 5 5 0 00.41-1.94 8.53 8.53 0 00-1.13-3.78 18.21 18.21 0 00-1.06-1.81l-1.63 1.18a10.57 10.57 0 01.94 1.54 7.22 7.22 0 01.88 2.87 3 3 0 01-.75 2h-.07a1.07 1.07 0 00-.28.28A3 3 0 019.05 17a5.09 5.09 0 01.81-2.41l-1.63-1.18A6.57 6.57 0 007.05 17a5 5 0 00.4 1.94A4.24 4.24 0 014 15.09V15a4.16 4.16 0 013.91-4H8a3.07 3.07 0 003.1-3V5h.84l.28-.22z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12.42 2l-.5.41-.72.59H9.05v5a1 1 0 01-1 1H7.8A6.12 6.12 0 002 15.09v.1A6.21 6.21 0 008.05 21a7.26 7.26 0 00.95-.06 4.93 4.93 0 006.1 0 7.77 7.77 0 001 .06 6.09 6.09 0 006-5.88A6 6 0 0016.18 9h-.13a1 1 0 01-1-1V3.41l-.53-.29L13 2.31zm.22 2.41l.41.18V8a3 3 0 003 3h.09a4 4 0 01.5 7.94 5 5 0 00.41-1.94 8.53 8.53 0 00-1.13-3.78 18.21 18.21 0 00-1.06-1.81l-1.63 1.18a10.57 10.57 0 01.94 1.54 7.22 7.22 0 01.88 2.87 3 3 0 01-.75 2h-.07a1.07 1.07 0 00-.28.28A3 3 0 019.05 17a5.09 5.09 0 01.81-2.41l-1.63-1.18A6.57 6.57 0 007.05 17a5 5 0 00.4 1.94A4.24 4.24 0 014 15.09V15a4.16 4.16 0 013.91-4H8a3.07 3.07 0 003.1-3V5h.84l.28-.22z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Garlic');
var _default = create;
exports["default"] = _default;