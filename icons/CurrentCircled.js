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
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12a3.84 3.84 0 01-3 2h-.2a3.68 3.68 0 01-2.92-1.56l-2.76-3.67A1.64 1.64 0 008.43 10 1.88 1.88 0 007 11l-.9 1.51-1.72-1L5.3 10a3.84 3.84 0 013-2 3.66 3.66 0 013.09 1.56l2.76 3.67a1.63 1.63 0 001.39.77A1.88 1.88 0 0017 13l.9-1.51 1.72 1z"
  }), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm6.7 12a3.84 3.84 0 01-3 2h-.2a3.68 3.68 0 01-2.92-1.56l-2.76-3.67A1.64 1.64 0 008.43 10 1.88 1.88 0 007 11l-.9 1.51-1.72-1L5.3 10a3.84 3.84 0 013-2 3.66 3.66 0 013.09 1.56l2.76 3.67a1.63 1.63 0 001.39.77A1.88 1.88 0 0017 13l.9-1.51 1.72 1z"
}), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'CurrentCircled');
var _default = create;
exports["default"] = _default;