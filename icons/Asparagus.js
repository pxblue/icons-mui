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
    d: "M12 2a6 6 0 00-1.25.88l.59 1.37L10 3.62a3.21 3.21 0 00-.72 1.13A12.69 12.69 0 0012 8a4.39 4.39 0 01-3-2 4.86 4.86 0 001 3v12s.37 1 2 1 2-1 2-1V10a5.72 5.72 0 01-2 .72S15 7.89 15 6a3.65 3.65 0 00-.5-1.66A5.49 5.49 0 0112 6a19.58 19.58 0 001.69-2.72A11 11 0 0012 2zM7 4a6 6 0 00-1.25.88l.59 1.37L5 5.62a3.21 3.21 0 00-.72 1.13A12.69 12.69 0 007 10a4.39 4.39 0 01-3-2 4.86 4.86 0 001 3v9s.37 1 2 1 2-1 2-1v-8a5.72 5.72 0 01-2 .72 16.25 16.25 0 002-2.31v-1.1a6.1 6.1 0 01-.81-1.87A5.87 5.87 0 017 8s.51-.68 1-1.53V6a2.1 2.1 0 01.34-1A11.72 11.72 0 007 4zm10 0a5.68 5.68 0 00-1.19.81A3.75 3.75 0 0116 6.09a4.91 4.91 0 01-.72 2.13A10.73 10.73 0 0017 10a4.41 4.41 0 01-2.19-1l-.18.25A1 1 0 0115 10v10s.37 1 2 1 2-1 2-1v-8a5.72 5.72 0 01-2 .72S20 9.9 20 8a3.65 3.65 0 00-.5-1.66A5.49 5.49 0 0117 8a19.58 19.58 0 001.69-2.72A11 11 0 0017 4z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 2a6 6 0 00-1.25.88l.59 1.37L10 3.62a3.21 3.21 0 00-.72 1.13A12.69 12.69 0 0012 8a4.39 4.39 0 01-3-2 4.86 4.86 0 001 3v12s.37 1 2 1 2-1 2-1V10a5.72 5.72 0 01-2 .72S15 7.89 15 6a3.65 3.65 0 00-.5-1.66A5.49 5.49 0 0112 6a19.58 19.58 0 001.69-2.72A11 11 0 0012 2zM7 4a6 6 0 00-1.25.88l.59 1.37L5 5.62a3.21 3.21 0 00-.72 1.13A12.69 12.69 0 007 10a4.39 4.39 0 01-3-2 4.86 4.86 0 001 3v9s.37 1 2 1 2-1 2-1v-8a5.72 5.72 0 01-2 .72 16.25 16.25 0 002-2.31v-1.1a6.1 6.1 0 01-.81-1.87A5.87 5.87 0 017 8s.51-.68 1-1.53V6a2.1 2.1 0 01.34-1A11.72 11.72 0 007 4zm10 0a5.68 5.68 0 00-1.19.81A3.75 3.75 0 0116 6.09a4.91 4.91 0 01-.72 2.13A10.73 10.73 0 0017 10a4.41 4.41 0 01-2.19-1l-.18.25A1 1 0 0115 10v10s.37 1 2 1 2-1 2-1v-8a5.72 5.72 0 01-2 .72S20 9.9 20 8a3.65 3.65 0 00-.5-1.66A5.49 5.49 0 0117 8a19.58 19.58 0 001.69-2.72A11 11 0 0017 4z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Asparagus');
var _default = create;
exports["default"] = _default;