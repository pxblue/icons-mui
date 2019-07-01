"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("@material-ui/icons/utils/createSvgIcon"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var create = parseInt(24, 10) !== 24 ? function (props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: '0 0 ' + 24 + ' ' + 24
  }, props), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    d: "M21.41 7.27l-4.68-4.68A2 2 0 0 0 15.31 2H8.69a2 2 0 0 0-1.42.59L2.59 7.27A2 2 0 0 0 2 8.69v6.62a2 2 0 0 0 .59 1.42l4.68 4.68a2 2 0 0 0 1.42.59h6.62a2 2 0 0 0 1.42-.59l4.68-4.68a2 2 0 0 0 .59-1.42V8.69a2 2 0 0 0-.59-1.42zm-1.41 8L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z"
  }), _react.default.createElement("path", {
    d: "M9.52 6L6 9.52v4.96L9.52 18h4.96L18 14.48V9.52L14.48 6H9.52z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M21.41 7.27l-4.68-4.68A2 2 0 0 0 15.31 2H8.69a2 2 0 0 0-1.42.59L2.59 7.27A2 2 0 0 0 2 8.69v6.62a2 2 0 0 0 .59 1.42l4.68 4.68a2 2 0 0 0 1.42.59h6.62a2 2 0 0 0 1.42-.59l4.68-4.68a2 2 0 0 0 .59-1.42V8.69a2 2 0 0 0-.59-1.42zm-1.41 8L15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z"
}), _react.default.createElement("path", {
  d: "M9.52 6L6 9.52v4.96L9.52 18h4.96L18 14.48V9.52L14.48 6H9.52z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Stopped');
var _default = create;
exports.default = _default;