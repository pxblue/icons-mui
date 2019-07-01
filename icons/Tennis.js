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
    d: "M12 2a9.81 9.81 0 0 1 6.5 2.4A10.13 10.13 0 0 0 15 12a10.13 10.13 0 0 0 3.5 7.6A10 10 0 0 1 12 22a9.81 9.81 0 0 1-6.5-2.4A10.13 10.13 0 0 0 9 12a10.13 10.13 0 0 0-3.5-7.6A9.81 9.81 0 0 1 12 2m10 10a9.79 9.79 0 0 1-2.1 6.1A7.64 7.64 0 0 1 17 12a8 8 0 0 1 2.9-6.2A10.52 10.52 0 0 1 22 12M2 12a10.52 10.52 0 0 1 2.1-6.2A8 8 0 0 1 7 12a7.64 7.64 0 0 1-2.9 6.1A9.79 9.79 0 0 1 2 12z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M12 2a9.81 9.81 0 0 1 6.5 2.4A10.13 10.13 0 0 0 15 12a10.13 10.13 0 0 0 3.5 7.6A10 10 0 0 1 12 22a9.81 9.81 0 0 1-6.5-2.4A10.13 10.13 0 0 0 9 12a10.13 10.13 0 0 0-3.5-7.6A9.81 9.81 0 0 1 12 2m10 10a9.79 9.79 0 0 1-2.1 6.1A7.64 7.64 0 0 1 17 12a8 8 0 0 1 2.9-6.2A10.52 10.52 0 0 1 22 12M2 12a10.52 10.52 0 0 1 2.1-6.2A8 8 0 0 1 7 12a7.64 7.64 0 0 1-2.9 6.1A9.79 9.79 0 0 1 2 12z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Tennis');
var _default = create;
exports.default = _default;