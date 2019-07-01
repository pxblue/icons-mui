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
    fill: "none",
    d: "M0 0h24v24H0z",
    opacity: ".01"
  }), _react.default.createElement("path", {
    d: "M1 14h6v2H1zm16 0h6v2h-6zm-.76-1.5a4.5 4.5 0 0 0-8.48 0l-2.83-1a7.5 7.5 0 0 1 14.14 0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z",
  opacity: ".01"
}), _react.default.createElement("path", {
  d: "M1 14h6v2H1zm16 0h6v2h-6zm-.76-1.5a4.5 4.5 0 0 0-8.48 0l-2.83-1a7.5 7.5 0 0 1 14.14 0z"
})), 'Breaker');
var _default = create;
exports.default = _default;