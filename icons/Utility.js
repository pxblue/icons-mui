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
    fill: "currentColor",
    d: "M20.93 20.63l-4-10L15.94 8H18v2h2V6h-4.81l-1.5-4h-3.38l-1.5 4H4v4h2V8h2.06l-1 2.63-4 10 1.48 1.2 7.45-5 7.45 5zM8.68 12h6.64l.08.2-3.4 2.26-3.4-2.26zm3-8h.62l.75 2h-2.11zm2.12 4l.75 2H9.44l.75-2zM6.12 18.38l1.72-4.29 2.36 1.58zm7.68-2.71l2.36-1.58 1.72 4.29z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "currentColor",
  d: "M20.93 20.63l-4-10L15.94 8H18v2h2V6h-4.81l-1.5-4h-3.38l-1.5 4H4v4h2V8h2.06l-1 2.63-4 10 1.48 1.2 7.45-5 7.45 5zM8.68 12h6.64l.08.2-3.4 2.26-3.4-2.26zm3-8h.62l.75 2h-2.11zm2.12 4l.75 2H9.44l.75-2zM6.12 18.38l1.72-4.29 2.36 1.58zm7.68-2.71l2.36-1.58 1.72 4.29z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Utility');
var _default = create;
exports.default = _default;