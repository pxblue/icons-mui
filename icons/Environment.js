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
    d: "M13 17a5 5 0 11-8-4V5a3 3 0 016 0v8a5 5 0 012 4M7 8v6.17a3 3 0 102 0V8H7"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M19.5 21.5A2.51 2.51 0 0117 19c0-1.67 2.5-4.5 2.5-4.5S22 17.33 22 19a2.51 2.51 0 01-2.5 2.5zm0-12A2.51 2.51 0 0117 7c0-1.67 2.5-4.5 2.5-4.5S22 5.33 22 7a2.51 2.51 0 01-2.5 2.5zm-3.5 6a2.51 2.51 0 01-2.5-2.5c0-1.67 2.5-4.5 2.5-4.5s2.5 2.83 2.5 4.5a2.51 2.51 0 01-2.5 2.5z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M13 17a5 5 0 11-8-4V5a3 3 0 016 0v8a5 5 0 012 4M7 8v6.17a3 3 0 102 0V8H7"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M19.5 21.5A2.51 2.51 0 0117 19c0-1.67 2.5-4.5 2.5-4.5S22 17.33 22 19a2.51 2.51 0 01-2.5 2.5zm0-12A2.51 2.51 0 0117 7c0-1.67 2.5-4.5 2.5-4.5S22 5.33 22 7a2.51 2.51 0 01-2.5 2.5zm-3.5 6a2.51 2.51 0 01-2.5-2.5c0-1.67 2.5-4.5 2.5-4.5s2.5 2.83 2.5 4.5a2.51 2.51 0 01-2.5 2.5z"
})), 'Environment');
var _default = create;
exports["default"] = _default;