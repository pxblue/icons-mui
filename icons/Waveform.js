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
    fill: "currentColor",
    d: "M20.84 16.35a1 1 0 01-1-.75l-1.39-5.54a.49.49 0 00-1 0l-1.09 4.36a2.5 2.5 0 01-4.86 0l-1.09-4.36a.49.49 0 00-1 0l-.98 4.36a2.5 2.5 0 01-4.86 0L2.15 8.74a1 1 0 011.95-.48l1.42 5.68a.49.49 0 001 0l1.05-4.36a2.5 2.5 0 014.86 0l1.09 4.36a.49.49 0 001 0l1.09-4.36a2.5 2.5 0 014.86 0l1.38 5.53a1 1 0 01-1 1.24z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  fill: "currentColor",
  d: "M20.84 16.35a1 1 0 01-1-.75l-1.39-5.54a.49.49 0 00-1 0l-1.09 4.36a2.5 2.5 0 01-4.86 0l-1.09-4.36a.49.49 0 00-1 0l-.98 4.36a2.5 2.5 0 01-4.86 0L2.15 8.74a1 1 0 011.95-.48l1.42 5.68a.49.49 0 001 0l1.05-4.36a2.5 2.5 0 014.86 0l1.09 4.36a.49.49 0 001 0l1.09-4.36a2.5 2.5 0 014.86 0l1.38 5.53a1 1 0 01-1 1.24z"
})), 'Waveform');
var _default = create;
exports["default"] = _default;