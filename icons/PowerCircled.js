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
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M12.63 8.69h-1v3h.71a2.36 2.36 0 001.48-.39 1.36 1.36 0 00.49-1.14 1.44 1.44 0 00-.41-1.12 2 2 0 00-1.27-.35z"
  }), _react["default"].createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.48 10.6a4.41 4.41 0 01-2.91.86h-.92v3.61H9.5V6.93h3.24a4.29 4.29 0 012.8.8 2.89 2.89 0 011 2.36 3.12 3.12 0 01-1.06 2.51z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M12.63 8.69h-1v3h.71a2.36 2.36 0 001.48-.39 1.36 1.36 0 00.49-1.14 1.44 1.44 0 00-.41-1.12 2 2 0 00-1.27-.35z"
}), _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.48 10.6a4.41 4.41 0 01-2.91.86h-.92v3.61H9.5V6.93h3.24a4.29 4.29 0 012.8.8 2.89 2.89 0 011 2.36 3.12 3.12 0 01-1.06 2.51z"
})), 'PowerCircled');
var _default = create;
exports["default"] = _default;