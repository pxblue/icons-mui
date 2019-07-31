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
    d: "M12 5C6.5 5 2 6.6 2 8.5S6.5 12 12 12s10-1.6 10-3.5S17.5 5 12 5M2 11.8v4.7C2 18.4 6.5 20 12 20s10-1.6 10-3.5v-4.7a8.17 8.17 0 01-2.3 1.1A25.06 25.06 0 0112 14a25.06 25.06 0 01-7.7-1.1A12.29 12.29 0 012 11.8z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 5C6.5 5 2 6.6 2 8.5S6.5 12 12 12s10-1.6 10-3.5S17.5 5 12 5M2 11.8v4.7C2 18.4 6.5 20 12 20s10-1.6 10-3.5v-4.7a8.17 8.17 0 01-2.3 1.1A25.06 25.06 0 0112 14a25.06 25.06 0 01-7.7-1.1A12.29 12.29 0 012 11.8z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'HockeyPuck');
var _default = create;
exports["default"] = _default;