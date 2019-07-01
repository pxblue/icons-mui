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
  }, props), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }), _react.default.createElement("path", {
    d: "M20.09 10.39a8.07 8.07 0 0 0-2.43-4.05 7.9 7.9 0 0 1 1.94 4.15 7.62 7.62 0 0 1-.67 4.38 8 8 0 0 1-1.23 1.81A8.31 8.31 0 0 1 16 18a8.3 8.3 0 0 1-2 .79 8 8 0 0 1-2 .21A7 7 0 0 1 9.42 5.5a3 3 0 1 0-.37-2A9 9 0 0 0 12 21a9.84 9.84 0 0 0 2.58-.51 9.26 9.26 0 0 0 2.28-1.22 9.64 9.64 0 0 0 1.81-1.8 9.3 9.3 0 0 0 1.18-2.22 8.41 8.41 0 0 0 .24-4.86zM13 4a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2.5"
}), _react.default.createElement("path", {
  d: "M20.09 10.39a8.07 8.07 0 0 0-2.43-4.05 7.9 7.9 0 0 1 1.94 4.15 7.62 7.62 0 0 1-.67 4.38 8 8 0 0 1-1.23 1.81A8.31 8.31 0 0 1 16 18a8.3 8.3 0 0 1-2 .79 8 8 0 0 1-2 .21A7 7 0 0 1 9.42 5.5a3 3 0 1 0-.37-2A9 9 0 0 0 12 21a9.84 9.84 0 0 0 2.58-.51 9.26 9.26 0 0 0 2.28-1.22 9.64 9.64 0 0 0 1.81-1.8 9.3 9.3 0 0 0 1.18-2.22 8.41 8.41 0 0 0 .24-4.86zM13 4a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'PxblueSmall');
var _default = create;
exports.default = _default;