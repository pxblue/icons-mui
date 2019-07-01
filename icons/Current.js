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
    d: "M16.67 17A4.58 4.58 0 0 1 13 15.05l-3.64-4.89A2.57 2.57 0 0 0 7.23 9a2.79 2.79 0 0 0-2.16 1.51l-1.21 2-1.72-1 1.21-2A4.73 4.73 0 0 1 7.12 7 4.51 4.51 0 0 1 11 9l3.68 4.89A2.56 2.56 0 0 0 16.77 15a2.78 2.78 0 0 0 2.16-1.51l1.21-2 1.72 1-1.21 2A4.73 4.73 0 0 1 16.88 17z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M16.67 17A4.58 4.58 0 0 1 13 15.05l-3.64-4.89A2.57 2.57 0 0 0 7.23 9a2.79 2.79 0 0 0-2.16 1.51l-1.21 2-1.72-1 1.21-2A4.73 4.73 0 0 1 7.12 7 4.51 4.51 0 0 1 11 9l3.68 4.89A2.56 2.56 0 0 0 16.77 15a2.78 2.78 0 0 0 2.16-1.51l1.21-2 1.72 1-1.21 2A4.73 4.73 0 0 1 16.88 17z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Current');
var _default = create;
exports.default = _default;