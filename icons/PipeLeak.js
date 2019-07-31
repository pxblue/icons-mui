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
    d: "M2 5v8h2v-2h6l2-2-2-2H4V5H2m18 0v2h-8l2 2-2 2h8v2h2V5h-2m-8 8s-2 2.17-2 3.5a2 2 0 002 2 2 2 0 002-2c0-1.33-2-3.5-2-3.5z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M2 5v8h2v-2h6l2-2-2-2H4V5H2m18 0v2h-8l2 2-2 2h8v2h2V5h-2m-8 8s-2 2.17-2 3.5a2 2 0 002 2 2 2 0 002-2c0-1.33-2-3.5-2-3.5z"
})), 'PipeLeak');
var _default = create;
exports["default"] = _default;