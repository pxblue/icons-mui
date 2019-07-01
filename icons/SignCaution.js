"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("@material-ui/icons/utils/createSvgIcon"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var create = parseInt(24, 10) !== 24 ? function (props) {
  return _react.default.createElement(_SvgIcon.default, _extends({
    viewBox: '0 0 ' + 24 + ' ' + 24
  }, props), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
    d: "M2 3h20v10h-4v8h-2v-8H8v8H6v-8H2V3m16.97 8L20 9.97V7.15L16.15 11h2.82m-5.65 0l6-6H16.5l-6 6h2.82m-5.66 0l6-6h-2.83l-6 6h2.83M5.18 5L4 6.18V9l4-4H5.18z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M2 3h20v10h-4v8h-2v-8H8v8H6v-8H2V3m16.97 8L20 9.97V7.15L16.15 11h2.82m-5.65 0l6-6H16.5l-6 6h2.82m-5.66 0l6-6h-2.83l-6 6h2.83M5.18 5L4 6.18V9l4-4H5.18z"
})), 'SignCaution');
var _default = create;
exports.default = _default;