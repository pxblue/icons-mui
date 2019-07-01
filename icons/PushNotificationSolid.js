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
  }), _react.default.createElement("g", {
    fill: "currentColor"
  }, _react.default.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), _react.default.createElement("path", {
    d: "M13 6a5.47 5.47 0 0 1 .1-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.1a5.47 5.47 0 0 1-1 .1 5 5 0 0 1-5-5z"
  }))));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("g", {
  fill: "currentColor"
}, _react.default.createElement("circle", {
  cx: "18",
  cy: "6",
  r: "3"
}), _react.default.createElement("path", {
  d: "M13 6a5.47 5.47 0 0 1 .1-1H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.1a5.47 5.47 0 0 1-1 .1 5 5 0 0 1-5-5z"
}))), 'PushNotificationSolid');
var _default = create;
exports.default = _default;