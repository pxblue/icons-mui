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
  }, props), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.5"
  }), _react["default"].createElement("path", {
    d: "M12 19A7 7 0 019.42 5.5a3 3 0 10-.37-2 9 9 0 109.31 14.85L17 17a7 7 0 01-5 2zm0-16a1 1 0 11-1 1 1 1 0 011-1z"
  }), _react["default"].createElement("path", {
    d: "M20.5 12a8.28 8.28 0 00-2.84-5.66A7.73 7.73 0 0119.5 12a7.23 7.23 0 01-2.5 5l1.41 1.41A8.72 8.72 0 0020.5 12z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2.5"
}), _react["default"].createElement("path", {
  d: "M12 19A7 7 0 019.42 5.5a3 3 0 10-.37-2 9 9 0 109.31 14.85L17 17a7 7 0 01-5 2zm0-16a1 1 0 11-1 1 1 1 0 011-1z"
}), _react["default"].createElement("path", {
  d: "M20.5 12a8.28 8.28 0 00-2.84-5.66A7.73 7.73 0 0119.5 12a7.23 7.23 0 01-2.5 5l1.41 1.41A8.72 8.72 0 0020.5 12z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'PxblueSmallAlt');
var _default = create;
exports["default"] = _default;