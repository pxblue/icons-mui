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
    d: "M13.5 12a1.5 1.5 0 1 0 1.5 1.5 1.54 1.54 0 0 0-1.5-1.5m0-9a8.27 8.27 0 0 1 8.5 8 10.64 10.64 0 0 1-.9 5c-4.1 0-5.1 4-8.6 4-2.2 0-3.2-1.7-3.4-4h-.9L7 20.3a1 1 0 0 1-1.1.7H3a1 1 0 0 1 0-2v-3a1 1 0 0 1 0-2h3.8l.5-1.6a3.92 3.92 0 0 0-1.8-.4h-.4L5 11a8.27 8.27 0 0 1 8.5-8M5 16v3h.3l.9-3z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M13.5 12a1.5 1.5 0 1 0 1.5 1.5 1.54 1.54 0 0 0-1.5-1.5m0-9a8.27 8.27 0 0 1 8.5 8 10.64 10.64 0 0 1-.9 5c-4.1 0-5.1 4-8.6 4-2.2 0-3.2-1.7-3.4-4h-.9L7 20.3a1 1 0 0 1-1.1.7H3a1 1 0 0 1 0-2v-3a1 1 0 0 1 0-2h3.8l.5-1.6a3.92 3.92 0 0 0-1.8-.4h-.4L5 11a8.27 8.27 0 0 1 8.5-8M5 16v3h.3l.9-3z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'FootballHelmet');
var _default = create;
exports.default = _default;