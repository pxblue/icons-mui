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
    d: "M13.75 9l1.2-.76c.63.34 1.05 1 1.05 1.76v11.75S8 20 8 11v-1c0-.73.39-1.37.97-1.72l1.46.72L12 8l1.75 1M10 2c1.53 0 2.8 1.15 3 2.64 1 .29 1.81 1.03 2.22 1.99l-1.47.87-1.75-1-1.57 1-1.67-.83c.39-.95 1.19-1.67 2.18-2.01A1.01 1.01 0 0 0 10 4V2z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M13.75 9l1.2-.76c.63.34 1.05 1 1.05 1.76v11.75S8 20 8 11v-1c0-.73.39-1.37.97-1.72l1.46.72L12 8l1.75 1M10 2c1.53 0 2.8 1.15 3 2.64 1 .29 1.81 1.03 2.22 1.99l-1.47.87-1.75-1-1.57 1-1.67-.83c.39-.95 1.19-1.67 2.18-2.01A1.01 1.01 0 0 0 10 4V2z"
})), 'ChiliPepper');
var _default = create;
exports.default = _default;