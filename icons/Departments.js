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
    d: "M10.2 2c.2 0 .4.1.4.3l2.2 4 .2.2-.1.3-2.2 4c-.1.2-.2.3-.4.3H5.8c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.3.1-.3 2.2-4c.1-.1.3-.2.5-.2h4.4m0 11c.2 0 .4.1.4.3l2.2 4 .1.3-.1.3-2.2 4c-.1.1-.2.3-.4.3H5.8c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.4.1-.3 2.2-4c.1-.1.3-.2.5-.2h4.4m9.3-5.5c.2 0 .4.1.4.3l2.2 4 .1.3-.1.3-2.2 4c-.1.1-.2.3-.4.3H15c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.4.1-.3 2.2-4c.1-.2.2-.3.4-.3h4.6z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M10.2 2c.2 0 .4.1.4.3l2.2 4 .2.2-.1.3-2.2 4c-.1.2-.2.3-.4.3H5.8c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.3.1-.3 2.2-4c.1-.1.3-.2.5-.2h4.4m0 11c.2 0 .4.1.4.3l2.2 4 .1.3-.1.3-2.2 4c-.1.1-.2.3-.4.3H5.8c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.4.1-.3 2.2-4c.1-.1.3-.2.5-.2h4.4m9.3-5.5c.2 0 .4.1.4.3l2.2 4 .1.3-.1.3-2.2 4c-.1.1-.2.3-.4.3H15c-.2 0-.4-.1-.4-.3l-2.2-4-.2-.4.1-.3 2.2-4c.1-.2.2-.3.4-.3h4.6z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Departments');
var _default = create;
exports["default"] = _default;