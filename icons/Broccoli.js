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
    d: "M9.24 2.5a3.65 3.65 0 00-3.68 3.09A4.05 4.05 0 002.49 9.5c0 1.7 1.24 3.51 3.91 3.91l.09.09a14.36 14.36 0 013 7 8.34 8.34 0 010 1h5v-1a8.64 8.64 0 013.72-6.81 3.39 3.39 0 002.1-.66 3.61 3.61 0 001.18-3 3.52 3.52 0 00-2.09-3.34A4.41 4.41 0 0015 3.5a4.25 4.25 0 00-2.28.59A4.8 4.8 0 009.49 2.5zm.16 2h.22a1.89 1.89 0 011.5 1.85c0 1-.24 1.3-.35 1.4l1.44 1.44a3.91 3.91 0 00.91-2.84v-.1A2.33 2.33 0 0115 5.5c1.2 0 2.5.77 2.5 2v1h1a1.42 1.42 0 011 1.5c0 .76-.12 1.24-.4 1.47a2.41 2.41 0 01-1.69.15 7 7 0 00.09-1.12h-2a2.42 2.42 0 01-.59 1.94 2.75 2.75 0 01-2.16.09l-.28-.12-.4.18a3.29 3.29 0 01-3.75-.65L8 11.5h-.51c-1.82 0-3-.78-3-2a2.06 2.06 0 012-2h1v-1A1.78 1.78 0 019 4.51a1.61 1.61 0 01.4-.01zm4.09 10.28a4.05 4.05 0 001.1 0c-.3.45-.66 1-1.1 1.72zm-3.81 0a5 5 0 001.81 0v2.72a17.35 17.35 0 01-1.81-2.69z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M9.24 2.5a3.65 3.65 0 00-3.68 3.09A4.05 4.05 0 002.49 9.5c0 1.7 1.24 3.51 3.91 3.91l.09.09a14.36 14.36 0 013 7 8.34 8.34 0 010 1h5v-1a8.64 8.64 0 013.72-6.81 3.39 3.39 0 002.1-.66 3.61 3.61 0 001.18-3 3.52 3.52 0 00-2.09-3.34A4.41 4.41 0 0015 3.5a4.25 4.25 0 00-2.28.59A4.8 4.8 0 009.49 2.5zm.16 2h.22a1.89 1.89 0 011.5 1.85c0 1-.24 1.3-.35 1.4l1.44 1.44a3.91 3.91 0 00.91-2.84v-.1A2.33 2.33 0 0115 5.5c1.2 0 2.5.77 2.5 2v1h1a1.42 1.42 0 011 1.5c0 .76-.12 1.24-.4 1.47a2.41 2.41 0 01-1.69.15 7 7 0 00.09-1.12h-2a2.42 2.42 0 01-.59 1.94 2.75 2.75 0 01-2.16.09l-.28-.12-.4.18a3.29 3.29 0 01-3.75-.65L8 11.5h-.51c-1.82 0-3-.78-3-2a2.06 2.06 0 012-2h1v-1A1.78 1.78 0 019 4.51a1.61 1.61 0 01.4-.01zm4.09 10.28a4.05 4.05 0 001.1 0c-.3.45-.66 1-1.1 1.72zm-3.81 0a5 5 0 001.81 0v2.72a17.35 17.35 0 01-1.81-2.69z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Broccoli');
var _default = create;
exports["default"] = _default;