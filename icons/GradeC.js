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
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm.88 13.32a7.73 7.73 0 002.55-.53v1.78a7.09 7.09 0 01-2.75.51 4.19 4.19 0 01-3.33-1.32A5.61 5.61 0 018.19 12a6.23 6.23 0 01.57-2.73 4.05 4.05 0 011.63-1.79 4.8 4.8 0 012.49-.63 6.73 6.73 0 012.93.7l-.69 1.73A10.67 10.67 0 0014 8.77a3.44 3.44 0 00-1.12-.2 2.15 2.15 0 00-1.85.9 4.18 4.18 0 00-.66 2.53c0 2.21.84 3.32 2.51 3.32z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm.88 13.32a7.73 7.73 0 002.55-.53v1.78a7.09 7.09 0 01-2.75.51 4.19 4.19 0 01-3.33-1.32A5.61 5.61 0 018.19 12a6.23 6.23 0 01.57-2.73 4.05 4.05 0 011.63-1.79 4.8 4.8 0 012.49-.63 6.73 6.73 0 012.93.7l-.69 1.73A10.67 10.67 0 0014 8.77a3.44 3.44 0 00-1.12-.2 2.15 2.15 0 00-1.85.9 4.18 4.18 0 00-.66 2.53c0 2.21.84 3.32 2.51 3.32z"
})), 'GradeC');
var _default = create;
exports["default"] = _default;