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
    d: "M15.36 2a5.81 5.81 0 00-3.06.87 23 23 0 00-4.69 4.5c-1.25 1.4-3.12 2.63-4.4 4.35a5.52 5.52 0 00-1.22 3 6.54 6.54 0 001.12 3.81A7.78 7.78 0 0010.33 22a12.35 12.35 0 008.13-3.72A12.75 12.75 0 0022 10.53a7.94 7.94 0 00-3.2-7.35A6.17 6.17 0 0015.36 2zm0 1.93a4.14 4.14 0 012.31.88A5.93 5.93 0 0120 10.4a10.84 10.84 0 01-3 6.47A10.39 10.39 0 0110.24 20a5.78 5.78 0 01-5.44-2.5 4.42 4.42 0 01-.8-2.63 3.5 3.5 0 01.81-1.94c1-1.3 2.83-2.57 4.31-4.21a23.74 23.74 0 014.25-4.13 3.74 3.74 0 011.96-.66zM17 8a1 1 0 100 2 1 1 0 000-2zm-2.5 2a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm-5 3a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm-2 2a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm2.5 1a1 1 0 000 2 1 1 0 100-2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M15.36 2a5.81 5.81 0 00-3.06.87 23 23 0 00-4.69 4.5c-1.25 1.4-3.12 2.63-4.4 4.35a5.52 5.52 0 00-1.22 3 6.54 6.54 0 001.12 3.81A7.78 7.78 0 0010.33 22a12.35 12.35 0 008.13-3.72A12.75 12.75 0 0022 10.53a7.94 7.94 0 00-3.2-7.35A6.17 6.17 0 0015.36 2zm0 1.93a4.14 4.14 0 012.31.88A5.93 5.93 0 0120 10.4a10.84 10.84 0 01-3 6.47A10.39 10.39 0 0110.24 20a5.78 5.78 0 01-5.44-2.5 4.42 4.42 0 01-.8-2.63 3.5 3.5 0 01.81-1.94c1-1.3 2.83-2.57 4.31-4.21a23.74 23.74 0 014.25-4.13 3.74 3.74 0 011.96-.66zM17 8a1 1 0 100 2 1 1 0 000-2zm-2.5 2a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm-5 3a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm-2 2a.5.5 0 00-.5.5.5.5 0 00.5.5.51.51 0 00.5-.5.5.5 0 00-.51-.5zm2.5 1a1 1 0 000 2 1 1 0 100-2z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Potato');
var _default = create;
exports["default"] = _default;