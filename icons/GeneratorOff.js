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
    d: "M1 3.54l2.78 2.78a10 10 0 0 0 13.9 13.9L20.46 23l1.27-1.27L2.27 2.27zm13.45 13.83a12.73 12.73 0 0 1-1.86.13 4.74 4.74 0 0 1-3.71-1.42A5.93 5.93 0 0 1 7.61 12a7.12 7.12 0 0 1 .19-1.65l2.2 2.16a4 4 0 0 0 .69 2.19 2.45 2.45 0 0 0 2.07.91h.33l1.71 1.71zM13.2 6.5a8 8 0 0 1 3.18.66L15.63 9a5.43 5.43 0 0 0-2.44-.58 3.17 3.17 0 0 0-1.77.49l2.46 2.46h2.51v2.51l3.83 3.83A10 10 0 0 0 6.32 3.78l3.55 3.55a6.23 6.23 0 0 1 3.33-.83z"
  }), _react.default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M1 3.54l2.78 2.78a10 10 0 0 0 13.9 13.9L20.46 23l1.27-1.27L2.27 2.27zm13.45 13.83a12.73 12.73 0 0 1-1.86.13 4.74 4.74 0 0 1-3.71-1.42A5.93 5.93 0 0 1 7.61 12a7.12 7.12 0 0 1 .19-1.65l2.2 2.16a4 4 0 0 0 .69 2.19 2.45 2.45 0 0 0 2.07.91h.33l1.71 1.71zM13.2 6.5a8 8 0 0 1 3.18.66L15.63 9a5.43 5.43 0 0 0-2.44-.58 3.17 3.17 0 0 0-1.77.49l2.46 2.46h2.51v2.51l3.83 3.83A10 10 0 0 0 6.32 3.78l3.55 3.55a6.23 6.23 0 0 1 3.33-.83z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'GeneratorOff');
var _default = create;
exports.default = _default;