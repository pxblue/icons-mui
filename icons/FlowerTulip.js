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
    d: "M3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9m9 9a9 9 0 0 0 9-9 9 9 0 0 0-9 9m6-19v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V3c.74 0 1.47.12 2.16.39.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0 1 18 3z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9m9 9a9 9 0 0 0 9-9 9 9 0 0 0-9 9m6-19v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V3c.74 0 1.47.12 2.16.39.55.23 1.04.57 1.45 1L12 2l2.39 2.39c.41-.43.9-.77 1.45-1A5.9 5.9 0 0 1 18 3z"
})), 'FlowerTulip');
var _default = create;
exports.default = _default;