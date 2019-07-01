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
    d: "M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3h2m-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2h2z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3h2m-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2h2z"
})), 'PipeDisconnected');
var _default = create;
exports.default = _default;