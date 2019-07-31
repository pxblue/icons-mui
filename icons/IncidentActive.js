"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createSvgIcon = _interopRequireDefault(require("@material-ui/icons/utils/createSvgIcon"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var create = parseInt(24, 10) !== 24 ? function (props) {
  return _react["default"].createElement(_SvgIcon["default"], _extends({
    viewBox: '0 0 ' + 24 + ' ' + 24
  }, props), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), _react["default"].createElement("path", {
    d: "M3 12a6 6 0 014-5.65V4.26a8 8 0 000 15.48v-2.09A6 6 0 013 12z"
  }), _react["default"].createElement("path", {
    d: "M15 4a8 8 0 108 8 8 8 0 00-8-8zm-2.77 2.79l.71.71a3.46 3.46 0 00-1.44 2.81h-1a4.49 4.49 0 011.73-3.52zM15 17a1 1 0 01-1-1h2a1 1 0 01-1 1zm4-2h-8v-1l1.33-1v-2.33A2.66 2.66 0 0114 8.2V8a1 1 0 012 0v.2a2.66 2.66 0 011.67 2.47V13L19 14zm-.5-4.69a3.46 3.46 0 00-1.44-2.81l.71-.71a4.49 4.49 0 011.73 3.52z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M3 12a6 6 0 014-5.65V4.26a8 8 0 000 15.48v-2.09A6 6 0 013 12z"
}), _react["default"].createElement("path", {
  d: "M15 4a8 8 0 108 8 8 8 0 00-8-8zm-2.77 2.79l.71.71a3.46 3.46 0 00-1.44 2.81h-1a4.49 4.49 0 011.73-3.52zM15 17a1 1 0 01-1-1h2a1 1 0 01-1 1zm4-2h-8v-1l1.33-1v-2.33A2.66 2.66 0 0114 8.2V8a1 1 0 012 0v.2a2.66 2.66 0 011.67 2.47V13L19 14zm-.5-4.69a3.46 3.46 0 00-1.44-2.81l.71-.71a4.49 4.49 0 011.73 3.52z"
})), 'IncidentActive');
var _default = create;
exports["default"] = _default;