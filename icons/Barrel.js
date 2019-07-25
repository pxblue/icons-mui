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
    d: "M18 19h1v2H5v-2h1v-6H5v-2h1V5H5V3h14v2h-1v6h1v2h-1v6m-9-6a3 3 0 003 3 3 3 0 003-3c0-2-3-5.37-3-5.37S9 11 9 13z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M18 19h1v2H5v-2h1v-6H5v-2h1V5H5V3h14v2h-1v6h1v2h-1v6m-9-6a3 3 0 003 3 3 3 0 003-3c0-2-3-5.37-3-5.37S9 11 9 13z"
})), 'Barrel');
var _default = create;
exports["default"] = _default;