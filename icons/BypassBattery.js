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
    d: "M0 0h24v24H0z"
  }), _react.default.createElement("path", {
    d: "M17.5 9.1H19v-6h-6v1.5h3.5L12 9.1l-6-6-1 1 7 7 5.5-5.5zM18 14v6H4v-6h14m.7-2H3.3A1.324 1.324 0 0 0 2 13.3v7.3A1.347 1.347 0 0 0 3.3 22h15.3a1.324 1.324 0 0 0 1.3-1.3V19h2v-4h-2v-1.7a1.181 1.181 0 0 0-1.2-1.3z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M17.5 9.1H19v-6h-6v1.5h3.5L12 9.1l-6-6-1 1 7 7 5.5-5.5zM18 14v6H4v-6h14m.7-2H3.3A1.324 1.324 0 0 0 2 13.3v7.3A1.347 1.347 0 0 0 3.3 22h15.3a1.324 1.324 0 0 0 1.3-1.3V19h2v-4h-2v-1.7a1.181 1.181 0 0 0-1.2-1.3z"
})), 'BypassBattery');
var _default = create;
exports.default = _default;