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
    d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11l3-3V4a2 2 0 0 0-2-2zm-6 17c-2.76 0-5-3.13-5-7s2.24-7 5-7 5 3.13 5 7-2.24 7-5 7z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11l3-3V4a2 2 0 0 0-2-2zm-6 17c-2.76 0-5-3.13-5-7s2.24-7 5-7 5 3.13 5 7-2.24 7-5 7z"
})), 'Xstorage');
var _default = create;
exports.default = _default;