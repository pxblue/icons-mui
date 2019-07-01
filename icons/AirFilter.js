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
    d: "M8 2a3 3 0 0 0-3 3v1.88a5.49 5.49 0 0 0-2.41-.57 2.88 2.88 0 0 0-.59.07v2a3.8 3.8 0 0 1 .59-.06A5.32 5.32 0 0 1 5 9v1.91a5.66 5.66 0 0 0-2.44-.57 5.12 5.12 0 0 0-.56 0v2a5 5 0 0 1 .56-.06A5.35 5.35 0 0 1 5 13v1.88a5.66 5.66 0 0 0-2.44-.57 3.43 3.43 0 0 0-.56.07v2a3.43 3.43 0 0 1 .56-.07A5.31 5.31 0 0 1 5 17v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-.75l-.78-.34c-.42-.14-.83-.3-1.22-.44V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.38A6.4 6.4 0 0 0 14.88 6a6.81 6.81 0 0 0-3.47 1.09A6.05 6.05 0 0 1 8.56 8 5 5 0 0 1 8 7.94v2a5 5 0 0 0 .56.06A6.6 6.6 0 0 0 12 8.91 6 6 0 0 1 14.88 8a10.9 10.9 0 0 1 3.31.91A9.93 9.93 0 0 0 22 10V8a9.16 9.16 0 0 1-3-.78V5a3 3 0 0 0-3-3zm6.88 8a6.81 6.81 0 0 0-3.47 1.09 6.05 6.05 0 0 1-2.85.91 5 5 0 0 1-.56-.06v2a5 5 0 0 0 .56.06A6.6 6.6 0 0 0 12 12.91a6 6 0 0 1 2.88-.91 10.9 10.9 0 0 1 3.31.91A9.93 9.93 0 0 0 22 14v-2a10.58 10.58 0 0 1-3.28-.91A8.76 8.76 0 0 0 14.88 10zm0 4a6.81 6.81 0 0 0-3.47 1.09 6.05 6.05 0 0 1-2.82.91 3.8 3.8 0 0 1-.59-.06v2a5.61 5.61 0 0 0 .59.06A6.6 6.6 0 0 0 12 16.91a6 6 0 0 1 2.91-.91 10.83 10.83 0 0 1 3.31.91A9.93 9.93 0 0 0 22 18v-2a10.75 10.75 0 0 1-3.31-.91A8.59 8.59 0 0 0 14.91 14z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M8 2a3 3 0 0 0-3 3v1.88a5.49 5.49 0 0 0-2.41-.57 2.88 2.88 0 0 0-.59.07v2a3.8 3.8 0 0 1 .59-.06A5.32 5.32 0 0 1 5 9v1.91a5.66 5.66 0 0 0-2.44-.57 5.12 5.12 0 0 0-.56 0v2a5 5 0 0 1 .56-.06A5.35 5.35 0 0 1 5 13v1.88a5.66 5.66 0 0 0-2.44-.57 3.43 3.43 0 0 0-.56.07v2a3.43 3.43 0 0 1 .56-.07A5.31 5.31 0 0 1 5 17v2a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-.75l-.78-.34c-.42-.14-.83-.3-1.22-.44V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.38A6.4 6.4 0 0 0 14.88 6a6.81 6.81 0 0 0-3.47 1.09A6.05 6.05 0 0 1 8.56 8 5 5 0 0 1 8 7.94v2a5 5 0 0 0 .56.06A6.6 6.6 0 0 0 12 8.91 6 6 0 0 1 14.88 8a10.9 10.9 0 0 1 3.31.91A9.93 9.93 0 0 0 22 10V8a9.16 9.16 0 0 1-3-.78V5a3 3 0 0 0-3-3zm6.88 8a6.81 6.81 0 0 0-3.47 1.09 6.05 6.05 0 0 1-2.85.91 5 5 0 0 1-.56-.06v2a5 5 0 0 0 .56.06A6.6 6.6 0 0 0 12 12.91a6 6 0 0 1 2.88-.91 10.9 10.9 0 0 1 3.31.91A9.93 9.93 0 0 0 22 14v-2a10.58 10.58 0 0 1-3.28-.91A8.76 8.76 0 0 0 14.88 10zm0 4a6.81 6.81 0 0 0-3.47 1.09 6.05 6.05 0 0 1-2.82.91 3.8 3.8 0 0 1-.59-.06v2a5.61 5.61 0 0 0 .59.06A6.6 6.6 0 0 0 12 16.91a6 6 0 0 1 2.91-.91 10.83 10.83 0 0 1 3.31.91A9.93 9.93 0 0 0 22 18v-2a10.75 10.75 0 0 1-3.31-.91A8.59 8.59 0 0 0 14.91 14z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'AirFilter');
var _default = create;
exports.default = _default;