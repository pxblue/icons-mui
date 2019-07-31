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
    d: "M20.27 7.52c-1.65-1.35-4.37-1.83-6.27-2-.9-.08-1.61-.1-1.94-.1h-.12c-1 0-5.77.11-8.21 2.1 0 0-1.73 1.25-1.73 4.87s1.53 4.95 1.53 4.95 1 1.05 4.07 1.66l.87.15h.07l.88.11h.18l.9.07h3l.9-.07h.18l.88-.11h.07l.87-.15c3.08-.61 4.07-1.66 4.07-1.66S22 16 22 12.39s-1.73-4.87-1.73-4.87zM6 17a2 2 0 112-2 2 2 0 01-2 2zm0-5a2 2 0 112-2 2 2 0 01-2 2zm6 6a2 2 0 112-2 2 2 0 01-2 2zm0-7a2 2 0 112-2 2 2 0 01-2 2zm6 6a2 2 0 112-2 2 2 0 01-2 2zm0-5a2 2 0 112-2 2 2 0 01-2 2zm-2-9a1 1 0 00-2 0v1.51c.61 0 1.29.13 2 .26zM5.82 19.59L6.56 21a2 2 0 001.75 1h7.38a2 2 0 001.75-1l.74-1.36a22.42 22.42 0 01-6.19.83 22.31 22.31 0 01-6.17-.88z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M20.27 7.52c-1.65-1.35-4.37-1.83-6.27-2-.9-.08-1.61-.1-1.94-.1h-.12c-1 0-5.77.11-8.21 2.1 0 0-1.73 1.25-1.73 4.87s1.53 4.95 1.53 4.95 1 1.05 4.07 1.66l.87.15h.07l.88.11h.18l.9.07h3l.9-.07h.18l.88-.11h.07l.87-.15c3.08-.61 4.07-1.66 4.07-1.66S22 16 22 12.39s-1.73-4.87-1.73-4.87zM6 17a2 2 0 112-2 2 2 0 01-2 2zm0-5a2 2 0 112-2 2 2 0 01-2 2zm6 6a2 2 0 112-2 2 2 0 01-2 2zm0-7a2 2 0 112-2 2 2 0 01-2 2zm6 6a2 2 0 112-2 2 2 0 01-2 2zm0-5a2 2 0 112-2 2 2 0 01-2 2zm-2-9a1 1 0 00-2 0v1.51c.61 0 1.29.13 2 .26zM5.82 19.59L6.56 21a2 2 0 001.75 1h7.38a2 2 0 001.75-1l.74-1.36a22.42 22.42 0 01-6.19.83 22.31 22.31 0 01-6.17-.88z"
})), 'EphesusFixture');
var _default = create;
exports["default"] = _default;