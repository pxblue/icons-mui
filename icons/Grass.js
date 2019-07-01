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
    d: "M5 2c.82.82 5.61 2.88 6 18v2h3C14 2.12 7 2 5 2zm14 3a7 7 0 0 0-5.56 3 16.3 16.3 0 0 1 1.12 4c1.18-5.21 3.83-6.39 4.44-7zM2 9c.77.77 4.72 3.09 5 12v1h3c0-8.48-2.5-12.78-8-13zm20 0c-2 0-7 2.25-7 13h3c0-9 3.12-12.12 4-13z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M5 2c.82.82 5.61 2.88 6 18v2h3C14 2.12 7 2 5 2zm14 3a7 7 0 0 0-5.56 3 16.3 16.3 0 0 1 1.12 4c1.18-5.21 3.83-6.39 4.44-7zM2 9c.77.77 4.72 3.09 5 12v1h3c0-8.48-2.5-12.78-8-13zm20 0c-2 0-7 2.25-7 13h3c0-9 3.12-12.12 4-13z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Grass');
var _default = create;
exports.default = _default;