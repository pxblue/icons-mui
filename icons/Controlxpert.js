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
    d: "M16.24 7.76l-1.41 1.41a4 4 0 0 1 0 5.66l1.41 1.41a6 6 0 0 0 0-8.48z"
  }), _react.default.createElement("path", {
    d: "M19.07 4.93l-1.42 1.42a8 8 0 0 1 0 11.3l1.42 1.42a10 10 0 0 0 0-14.14zM12 18a6 6 0 0 1 0-12v3l4-4-4-4v3a8 8 0 1 0 4.06 14.88l-1.48-1.47A6 6 0 0 1 12 18z"
  }), _react.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M16.24 7.76l-1.41 1.41a4 4 0 0 1 0 5.66l1.41 1.41a6 6 0 0 0 0-8.48z"
}), _react.default.createElement("path", {
  d: "M19.07 4.93l-1.42 1.42a8 8 0 0 1 0 11.3l1.42 1.42a10 10 0 0 0 0-14.14zM12 18a6 6 0 0 1 0-12v3l4-4-4-4v3a8 8 0 1 0 4.06 14.88l-1.48-1.47A6 6 0 0 1 12 18z"
}), _react.default.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "2"
})), 'Controlxpert');
var _default = create;
exports.default = _default;