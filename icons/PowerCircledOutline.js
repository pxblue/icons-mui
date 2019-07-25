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
    d: "M14.54 7.73a4.29 4.29 0 00-2.8-.8H8.5v10.14h2.15v-3.61h.92a4.41 4.41 0 002.91-.86 3.12 3.12 0 001-2.51 2.89 2.89 0 00-.94-2.36zm-1.7 3.58a2.36 2.36 0 01-1.48.39h-.71v-3h1a2 2 0 011.29.36 1.44 1.44 0 01.41 1.12 1.36 1.36 0 01-.51 1.13z"
  }), _react["default"].createElement("path", {
    d: "M12 4a8 8 0 11-8 8 8 8 0 018-8m0-2a10 10 0 1010 10A10 10 0 0012 2z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M14.54 7.73a4.29 4.29 0 00-2.8-.8H8.5v10.14h2.15v-3.61h.92a4.41 4.41 0 002.91-.86 3.12 3.12 0 001-2.51 2.89 2.89 0 00-.94-2.36zm-1.7 3.58a2.36 2.36 0 01-1.48.39h-.71v-3h1a2 2 0 011.29.36 1.44 1.44 0 01.41 1.12 1.36 1.36 0 01-.51 1.13z"
}), _react["default"].createElement("path", {
  d: "M12 4a8 8 0 11-8 8 8 8 0 018-8m0-2a10 10 0 1010 10A10 10 0 0012 2z"
})), 'PowerCircledOutline');
var _default = create;
exports["default"] = _default;