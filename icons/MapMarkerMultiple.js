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
    d: "M14 11.5c1.4 0 2.5-1.1 2.5-2.5S15.4 6.5 14 6.5 11.5 7.6 11.5 9s1.1 2.5 2.5 2.5M14 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S7 14.2 7 9c0-3.9 3.1-7 7-7M5 9c0 4.5 5.1 10.7 6 11.8L10 22S3 14.2 3 9c0-3.2 2.1-5.8 5-6.7-1.8 1.6-3 4-3 6.7z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M14 11.5c1.4 0 2.5-1.1 2.5-2.5S15.4 6.5 14 6.5 11.5 7.6 11.5 9s1.1 2.5 2.5 2.5M14 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S7 14.2 7 9c0-3.9 3.1-7 7-7M5 9c0 4.5 5.1 10.7 6 11.8L10 22S3 14.2 3 9c0-3.2 2.1-5.8 5-6.7-1.8 1.6-3 4-3 6.7z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'MapMarkerMultiple');
var _default = create;
exports["default"] = _default;