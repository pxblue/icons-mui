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
    d: "M13.5 2l-2 2h-2v2l-2 2 2.06 2.12L9.5 12h2l2 2 2-2h2v-2l2-2-2-2V4h-2zm0 3.5A2.5 2.5 0 1111 8a2.47 2.47 0 012.45-2.5zM2.5 13c.21 1.21 1.27 7 5 7a4.39 4.39 0 002.56-.75 1.22 1.22 0 01.22.44A9 9 0 0110.5 22h2v-1a2.69 2.69 0 011.75-2.16A2.89 2.89 0 0016.5 20c2.9 0 5-5.08 5-6h-5c-1.77 0-3 .72-3 2.56A6.29 6.29 0 0117 16a10.65 10.65 0 00-2.09.44l-.19.06-.28.1a6.33 6.33 0 00-.94.37 6.58 6.58 0 00-1.75 1.16C10.52 15.7 8.06 15.4 6.5 15c1.61 0 4 .67 5 2a3.86 3.86 0 00-3.72-4H2.5z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M13.5 2l-2 2h-2v2l-2 2 2.06 2.12L9.5 12h2l2 2 2-2h2v-2l2-2-2-2V4h-2zm0 3.5A2.5 2.5 0 1111 8a2.47 2.47 0 012.45-2.5zM2.5 13c.21 1.21 1.27 7 5 7a4.39 4.39 0 002.56-.75 1.22 1.22 0 01.22.44A9 9 0 0110.5 22h2v-1a2.69 2.69 0 011.75-2.16A2.89 2.89 0 0016.5 20c2.9 0 5-5.08 5-6h-5c-1.77 0-3 .72-3 2.56A6.29 6.29 0 0117 16a10.65 10.65 0 00-2.09.44l-.19.06-.28.1a6.33 6.33 0 00-.94.37 6.58 6.58 0 00-1.75 1.16C10.52 15.7 8.06 15.4 6.5 15c1.61 0 4 .67 5 2a3.86 3.86 0 00-3.72-4H2.5z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Sunflower');
var _default = create;
exports["default"] = _default;