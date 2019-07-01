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
    d: "M11 4a25.89 25.89 0 0 0-3.41.19 2.72 2.72 0 0 0-1.81 1.09 2.25 2.25 0 0 0-.34 1.78L6 10a2 2 0 0 0-2 2v2h14v-2a2 2 0 0 0-.91-1.69L21.41 6H23V4h-2.41l-4.25 4.25.22-1.15a2.31 2.31 0 0 0-.37-1.82 2.72 2.72 0 0 0-1.81-1.09A25.44 25.44 0 0 0 11 4zm-1 2v4H8l-.62-3.34a.25.25 0 0 1 .06-.22.62.62 0 0 1 .44-.25A16.7 16.7 0 0 1 10 6zm2 0a18.2 18.2 0 0 1 2.09.16.62.62 0 0 1 .44.25.28.28 0 0 1 .06.25L14 9.81V10h-2zm-6 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm10 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM1 15v2h20v-2zm0 3v2h20v-2z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M11 4a25.89 25.89 0 0 0-3.41.19 2.72 2.72 0 0 0-1.81 1.09 2.25 2.25 0 0 0-.34 1.78L6 10a2 2 0 0 0-2 2v2h14v-2a2 2 0 0 0-.91-1.69L21.41 6H23V4h-2.41l-4.25 4.25.22-1.15a2.31 2.31 0 0 0-.37-1.82 2.72 2.72 0 0 0-1.81-1.09A25.44 25.44 0 0 0 11 4zm-1 2v4H8l-.62-3.34a.25.25 0 0 1 .06-.22.62.62 0 0 1 .44-.25A16.7 16.7 0 0 1 10 6zm2 0a18.2 18.2 0 0 1 2.09.16.62.62 0 0 1 .44.25.28.28 0 0 1 .06.25L14 9.81V10h-2zm-6 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm10 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM1 15v2h20v-2zm0 3v2h20v-2z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'CombineHarvester');
var _default = create;
exports.default = _default;