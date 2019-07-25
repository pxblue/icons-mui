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
    d: "M11.32 8.69H10.2v6.51h.9q3.08 0 3.07-3.29t-2.85-3.22z"
  }), _react["default"].createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 13.64A5.73 5.73 0 0110.91 17H8.08V7h3.13A5.23 5.23 0 0115 8.25a4.71 4.71 0 011.36 3.6A4.93 4.93 0 0115 15.64z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M11.32 8.69H10.2v6.51h.9q3.08 0 3.07-3.29t-2.85-3.22z"
}), _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm3 13.64A5.73 5.73 0 0110.91 17H8.08V7h3.13A5.23 5.23 0 0115 8.25a4.71 4.71 0 011.36 3.6A4.93 4.93 0 0115 15.64z"
})), 'GradeD');
var _default = create;
exports["default"] = _default;