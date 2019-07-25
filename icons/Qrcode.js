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
    d: "M3 11h2v2H3v-2m8-6h2v4h-2V5m-2 6h4v4h-2v-2H9v-2m6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2v-2m4 8v-4h-2v4h2M15 3h6v6h-6V3m2 2v2h2V5h-2M3 3h6v6H3V3m2 2v2h2V5H5M3 15h6v6H3v-6m2 2v2h2v-2z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M3 11h2v2H3v-2m8-6h2v4h-2V5m-2 6h4v4h-2v-2H9v-2m6 0h2v2h2v-2h2v2h-2v2h2v4h-2v2h-2v-2h-4v2h-2v-4h4v-2h2v-2h-2v-2m4 8v-4h-2v4h2M15 3h6v6h-6V3m2 2v2h2V5h-2M3 3h6v6H3V3m2 2v2h2V5H5M3 15h6v6H3v-6m2 2v2h2v-2z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Qrcode');
var _default = create;
exports["default"] = _default;