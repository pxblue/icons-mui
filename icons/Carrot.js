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
    d: "M16.66 2l-.9 1.78a2.33 2.33 0 0 1 .78.81 1.2 1.2 0 0 1 .06.91 3.34 3.34 0 0 1-.69 1.25l-.5.53-.12.09 1.44 1.43.09-.12c.17-.17.32-.31.47-.44l.06-.06a3.42 3.42 0 0 1 1.25-.69 1.24 1.24 0 0 1 .91.06 2.27 2.27 0 0 1 .81.79l1.78-.91a4 4 0 0 0-1.75-1.69 3.26 3.26 0 0 0-.44-.15l2-2-1.4-1.41-2 2c-.05-.15-.1-.3-.16-.44A4 4 0 0 0 16.66 2zm-6.12 4.74a2.07 2.07 0 0 0-.35 0s-3.07 4-2.87 4.41A6.4 6.4 0 0 1 9.91 14a6 6 0 0 0-4-1s-4.3 7.7-4 9c1 .2 3.59-1 7.19-3.09a8.69 8.69 0 0 0-.5-2.63 8.26 8.26 0 0 1 2.4 1.49 4.2 4.2 0 0 0 2.68-1.69c.1-.2.7-1.88 0-2.68a7.26 7.26 0 0 1 2 1.37 15 15 0 0 0 1.5-1s.52-1.89-2.28-4.69C12.81 7 11.21 6.73 10.54 6.74z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M16.66 2l-.9 1.78a2.33 2.33 0 0 1 .78.81 1.2 1.2 0 0 1 .06.91 3.34 3.34 0 0 1-.69 1.25l-.5.53-.12.09 1.44 1.43.09-.12c.17-.17.32-.31.47-.44l.06-.06a3.42 3.42 0 0 1 1.25-.69 1.24 1.24 0 0 1 .91.06 2.27 2.27 0 0 1 .81.79l1.78-.91a4 4 0 0 0-1.75-1.69 3.26 3.26 0 0 0-.44-.15l2-2-1.4-1.41-2 2c-.05-.15-.1-.3-.16-.44A4 4 0 0 0 16.66 2zm-6.12 4.74a2.07 2.07 0 0 0-.35 0s-3.07 4-2.87 4.41A6.4 6.4 0 0 1 9.91 14a6 6 0 0 0-4-1s-4.3 7.7-4 9c1 .2 3.59-1 7.19-3.09a8.69 8.69 0 0 0-.5-2.63 8.26 8.26 0 0 1 2.4 1.49 4.2 4.2 0 0 0 2.68-1.69c.1-.2.7-1.88 0-2.68a7.26 7.26 0 0 1 2 1.37 15 15 0 0 0 1.5-1s.52-1.89-2.28-4.69C12.81 7 11.21 6.73 10.54 6.74z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Carrot');
var _default = create;
exports.default = _default;