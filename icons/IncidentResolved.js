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
    d: "M15 4a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M3 12a6 6 0 014-5.65V4.26a8 8 0 000 15.48v-2.09A6 6 0 013 12zm14.67 1v-2.33A2.66 2.66 0 0016 8.2V8a1 1 0 00-2 0v.2a2.66 2.66 0 00-1.67 2.47V13L11 14v1h8v-1zM15 17a1 1 0 001-1h-2a1 1 0 001 1z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M15 4a8 8 0 108 8 8 8 0 00-8-8zm0 14a6 6 0 116-6 6 6 0 01-6 6z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M3 12a6 6 0 014-5.65V4.26a8 8 0 000 15.48v-2.09A6 6 0 013 12zm14.67 1v-2.33A2.66 2.66 0 0016 8.2V8a1 1 0 00-2 0v.2a2.66 2.66 0 00-1.67 2.47V13L11 14v1h8v-1zM15 17a1 1 0 001-1h-2a1 1 0 001 1z"
})), 'IncidentResolved');
var _default = create;
exports["default"] = _default;