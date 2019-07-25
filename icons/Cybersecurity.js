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
    d: "M12 23a11 11 0 1111-11 11 11 0 01-11 11zm0-20a9 9 0 109 9 9 9 0 00-9-9z"
  }), _react["default"].createElement("path", {
    d: "M15 11V9a3 3 0 00-6 0v2a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1zm-4.5-2a1.5 1.5 0 013 0v2h-3z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 23a11 11 0 1111-11 11 11 0 01-11 11zm0-20a9 9 0 109 9 9 9 0 00-9-9z"
}), _react["default"].createElement("path", {
  d: "M15 11V9a3 3 0 00-6 0v2a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1zm-4.5-2a1.5 1.5 0 013 0v2h-3z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Cybersecurity');
var _default = create;
exports["default"] = _default;