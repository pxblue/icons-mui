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
    d: "M16 6h-5.5v4H1v5h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-3a2 2 0 0 0-2-2h-2l-3-4m-4 1.5h3.5l2 2.5H12V7.5m-6 6A1.5 1.5 0 1 1 4.5 15 1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M16 6h-5.5v4H1v5h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-3a2 2 0 0 0-2-2h-2l-3-4m-4 1.5h3.5l2 2.5H12V7.5m-6 6A1.5 1.5 0 1 1 4.5 15 1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'PickupTruck');
var _default = create;
exports.default = _default;