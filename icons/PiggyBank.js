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
    d: "M13 1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m7 13c0-2.4-1.8-4.4-4.5-5.4-.5.8-1.4 1.4-2.5 1.4-1.2 0-2.3-.8-2.8-1.8-.2 0-.5.1-.7.1L7 7v2.3c-1.5.9-2.6 2.2-2.9 3.7H2v4h3.1c.5.6 1.2 1.2 1.9 1.7V22h2v-2.4c.9.3 1.9.4 3 .4s2.1-.2 3-.4V22h2v-3.3c1.1-.7 2-1.6 2.5-2.7H22v-2h-2M7 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M13 1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m7 13c0-2.4-1.8-4.4-4.5-5.4-.5.8-1.4 1.4-2.5 1.4-1.2 0-2.3-.8-2.8-1.8-.2 0-.5.1-.7.1L7 7v2.3c-1.5.9-2.6 2.2-2.9 3.7H2v4h3.1c.5.6 1.2 1.2 1.9 1.7V22h2v-2.4c.9.3 1.9.4 3 .4s2.1-.2 3-.4V22h2v-3.3c1.1-.7 2-1.6 2.5-2.7H22v-2h-2M7 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'PiggyBank');
var _default = create;
exports["default"] = _default;