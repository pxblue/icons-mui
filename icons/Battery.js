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
    d: "M20 15.67V14h2v-4h-2V8.33A1.34 1.34 0 0 0 18.67 7H3.34A1.34 1.34 0 0 0 2 8.33v7.33A1.34 1.34 0 0 0 3.33 17h15.34A1.34 1.34 0 0 0 20 15.67z"
  }), _react.default.createElement("path", {
    d: "M20 15.67V14h2v-4h-2V8.33A1.34 1.34 0 0 0 18.67 7H3.34A1.34 1.34 0 0 0 2 8.33v7.33A1.34 1.34 0 0 0 3.33 17h15.34A1.34 1.34 0 0 0 20 15.67z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M24 0v24H0V0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M20 15.67V14h2v-4h-2V8.33A1.34 1.34 0 0 0 18.67 7H3.34A1.34 1.34 0 0 0 2 8.33v7.33A1.34 1.34 0 0 0 3.33 17h15.34A1.34 1.34 0 0 0 20 15.67z"
}), _react.default.createElement("path", {
  d: "M20 15.67V14h2v-4h-2V8.33A1.34 1.34 0 0 0 18.67 7H3.34A1.34 1.34 0 0 0 2 8.33v7.33A1.34 1.34 0 0 0 3.33 17h15.34A1.34 1.34 0 0 0 20 15.67z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M24 0v24H0V0z"
})), 'Battery');
var _default = create;
exports.default = _default;