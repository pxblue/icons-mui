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
    d: "M0 0h24v24H0z",
    opacity: ".01"
  }), _react["default"].createElement("path", {
    d: "M18 12a6 6 0 00-5.74-6l3-3-1.43-1.39-6.11 6.11a6 6 0 004 10.23l-3 3 1.42 1.41 6.11-6.11A6 6 0 0018 12zm-6 4a4 4 0 114-4 4 4 0 01-4 4z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z",
  opacity: ".01"
}), _react["default"].createElement("path", {
  d: "M18 12a6 6 0 00-5.74-6l3-3-1.43-1.39-6.11 6.11a6 6 0 004 10.23l-3 3 1.42 1.41 6.11-6.11A6 6 0 0018 12zm-6 4a4 4 0 114-4 4 4 0 01-4 4z"
})), 'Pump');
var _default = create;
exports["default"] = _default;