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
    d: "M17 14v2h6v-2zM1 16h6v-2H1z"
  }), _react.default.createElement("path", {
    d: "M5.514 14.583l7.071-7.071L14 8.926l-7.071 7.07z"
  }), _react.default.createElement("path", {
    d: "M11.88 6.81l-7.07 7.07L3 16h3.93L14 8.93l-2.12-2.12z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M17 14v2h6v-2zM1 16h6v-2H1z"
}), _react.default.createElement("path", {
  d: "M5.514 14.583l7.071-7.071L14 8.926l-7.071 7.07z"
}), _react.default.createElement("path", {
  d: "M11.88 6.81l-7.07 7.07L3 16h3.93L14 8.93l-2.12-2.12z"
})), 'Tripped');
var _default = create;
exports.default = _default;