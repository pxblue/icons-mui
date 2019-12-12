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
    d: "M6 22a3 3 0 01-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 01-1-1V4a2 2 0 012-2h4a2 2 0 012 2v1a1 1 0 01-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 01-3 3H6m-1-3a1 1 0 001 1h12a1 1 0 001-1c0-.21-.07-.41-.18-.57l-2.29-3.96L14 17l-5.07-5.07-3.75 6.5c-.11.16-.18.36-.18.57m8-9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M6 22a3 3 0 01-3-3c0-.6.18-1.16.5-1.63L9 7.81V6a1 1 0 01-1-1V4a2 2 0 012-2h4a2 2 0 012 2v1a1 1 0 01-1 1v1.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 01-3 3H6m-1-3a1 1 0 001 1h12a1 1 0 001-1c0-.21-.07-.41-.18-.57l-2.29-3.96L14 17l-5.07-5.07-3.75 6.5c-.11.16-.18.36-.18.57m8-9a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z"
})), 'Flask');
var _default = create;
exports["default"] = _default;