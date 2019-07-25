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
    d: "M12 20.2a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3zm-5-8a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3zm10 0a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react["default"].createElement("path", {
  d: "M12 20.2a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3zm-5-8a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3zm10 0a3 3 0 01-3-3c0-2 3-5.4 3-5.4s3 3.4 3 5.4a3 3 0 01-3 3z"
})), 'Moisture');
var _default = create;
exports["default"] = _default;