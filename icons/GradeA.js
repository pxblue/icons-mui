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
    d: "M12 8.53c-.15.59-.58 2-1.29 4.33h2.61c-.67-2.15-1.05-3.37-1.13-3.66S12 8.7 12 8.53z"
  }), _react["default"].createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm2.55 15l-.73-2.38h-3.64L9.45 17H7.17L10.7 7h2.59l3.54 10z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M12 8.53c-.15.59-.58 2-1.29 4.33h2.61c-.67-2.15-1.05-3.37-1.13-3.66S12 8.7 12 8.53z"
}), _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm2.55 15l-.73-2.38h-3.64L9.45 17H7.17L10.7 7h2.59l3.54 10z"
})), 'GradeA');
var _default = create;
exports["default"] = _default;