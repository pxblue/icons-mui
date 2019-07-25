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
    d: "M18 2c-1.46 0-1.86 2.5-2 4v2h1c1.84 0 5-.19 5-2a22.7 22.7 0 00-4.28.28A22.76 22.76 0 0018 2zm4 0a2.82 2.82 0 00-3 2.63A2.29 2.29 0 0019 5a2.79 2.79 0 003-2.55A3.38 3.38 0 0022 2zm-8 2c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 0015 8c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 0012 11c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 009 14c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v.31l-2 2 .7.69 2-2H5c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 006 17c0-1.18-.29-3.25-1-4z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M18 2c-1.46 0-1.86 2.5-2 4v2h1c1.84 0 5-.19 5-2a22.7 22.7 0 00-4.28.28A22.76 22.76 0 0018 2zm4 0a2.82 2.82 0 00-3 2.63A2.29 2.29 0 0019 5a2.79 2.79 0 003-2.55A3.38 3.38 0 0022 2zm-8 2c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 0015 8c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 0012 11c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v1h1c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 009 14c0-1.18-.29-3.25-1-4zm-3 3c-.93.93-1 4.15-1 6v.31l-2 2 .7.69 2-2H5c1.84 0 5.07-.07 6-1-.73-.73-2.79-1-4-1a4.2 4.2 0 00-1.16.19A4.38 4.38 0 006 17c0-1.18-.29-3.25-1-4z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Barley');
var _default = create;
exports["default"] = _default;