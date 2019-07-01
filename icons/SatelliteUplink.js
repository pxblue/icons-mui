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
    d: "M11.86 2l-.52 1.93c4.41.85 7.86 4.3 8.71 8.72l1.95-.52C20.95 7.03 16.96 3.04 11.86 2m-1.04 3.86l-.52 1.95c3.04.46 5.42 2.84 5.88 5.87l1.94-.52c-.66-3.72-3.57-6.66-7.3-7.3m-7.1 3.83A7.96 7.96 0 0 0 5 18.28V22h3v-1.59c.95.39 1.97.59 3 .59 1.14 0 2.27-.25 3.3-.72L3.72 9.69m6.07.07l-.53 1.96a3 3 0 0 1 3 3l1.97-.52c-.23-2.34-2.1-4.2-4.44-4.44z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M11.86 2l-.52 1.93c4.41.85 7.86 4.3 8.71 8.72l1.95-.52C20.95 7.03 16.96 3.04 11.86 2m-1.04 3.86l-.52 1.95c3.04.46 5.42 2.84 5.88 5.87l1.94-.52c-.66-3.72-3.57-6.66-7.3-7.3m-7.1 3.83A7.96 7.96 0 0 0 5 18.28V22h3v-1.59c.95.39 1.97.59 3 .59 1.14 0 2.27-.25 3.3-.72L3.72 9.69m6.07.07l-.53 1.96a3 3 0 0 1 3 3l1.97-.52c-.23-2.34-2.1-4.2-4.44-4.44z"
})), 'SatelliteUplink');
var _default = create;
exports.default = _default;