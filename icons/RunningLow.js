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
    d: "M12 1v3a8 8 0 00-8 8 8.92 8.92 0 001.2 4.3l1.5-1.5A5.28 5.28 0 016 12a6 6 0 016-6v3l4-4zm6.8 6.7l-1.5 1.5A6.51 6.51 0 0118 12a6 6 0 01-6 6v-3l-4 4 4 4v-3a8 8 0 008-8 8.92 8.92 0 00-1.2-4.3z"
  }), _react["default"].createElement("path", {
    d: "M15 13h-3V9h-2v6h5v-2z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M12 1v3a8 8 0 00-8 8 8.92 8.92 0 001.2 4.3l1.5-1.5A5.28 5.28 0 016 12a6 6 0 016-6v3l4-4zm6.8 6.7l-1.5 1.5A6.51 6.51 0 0118 12a6 6 0 01-6 6v-3l-4 4 4 4v-3a8 8 0 008-8 8.92 8.92 0 00-1.2-4.3z"
}), _react["default"].createElement("path", {
  d: "M15 13h-3V9h-2v6h5v-2z"
})), 'RunningLow');
var _default = create;
exports["default"] = _default;