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
    d: "M4 4h6v6H4V4m16 0v6h-6V4h6m-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3v-1m2 0v3h2v-3h-2M4 20v-6h6v6H4M6 6v2h2V6H6m10 0v2h2V6h-2M6 16v2h2v-2H6m-2-5h2v2H4v-2m5 0h4v4h-2v-2H9v-2m2-5h2v4h-2V6M2 2v4H0V2a2 2 0 012-2h4v2H2m20-2a2 2 0 012 2v4h-2V2h-4V0h4M2 18v4h4v2H2a2 2 0 01-2-2v-4h2m20 4v-4h2v4a2 2 0 01-2 2h-4v-2z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M4 4h6v6H4V4m16 0v6h-6V4h6m-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3v-1m2 0v3h2v-3h-2M4 20v-6h6v6H4M6 6v2h2V6H6m10 0v2h2V6h-2M6 16v2h2v-2H6m-2-5h2v2H4v-2m5 0h4v4h-2v-2H9v-2m2-5h2v4h-2V6M2 2v4H0V2a2 2 0 012-2h4v2H2m20-2a2 2 0 012 2v4h-2V2h-4V0h4M2 18v4h4v2H2a2 2 0 01-2-2v-4h2m20 4v-4h2v4a2 2 0 01-2 2h-4v-2z"
})), 'ScanQrcode');
var _default = create;
exports["default"] = _default;