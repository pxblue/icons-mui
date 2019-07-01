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
    d: "M12 9a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m8-9h-3V8.86c1.72-.45 3-2 3-3.86h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M12 9a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m0 5a2 2 0 0 1-2-2 2 2 0 0 1 2-2c1.11 0 2 .89 2 2a2 2 0 0 1-2 2m8-9h-3V8.86c1.72-.45 3-2 3-3.86h-3V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86z"
})), 'TrafficLight');
var _default = create;
exports.default = _default;