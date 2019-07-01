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
    d: "M12 2a8 8 0 0 0-8 8v1.9A2.92 2.92 0 0 0 3 14a2.88 2.88 0 0 0 1.94 2.61C6.24 19.72 8.85 22 12 22h3v-2h-3c-2.26 0-4.31-1.7-5.34-4.39l-.21-.55-.59-.06A1 1 0 0 1 5 14a1 1 0 0 1 .5-.86l.5-.29V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-4.09a1.5 1.5 0 1 0-1.52 2H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-2a8 8 0 0 0-8-8z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M12 2a8 8 0 0 0-8 8v1.9A2.92 2.92 0 0 0 3 14a2.88 2.88 0 0 0 1.94 2.61C6.24 19.72 8.85 22 12 22h3v-2h-3c-2.26 0-4.31-1.7-5.34-4.39l-.21-.55-.59-.06A1 1 0 0 1 5 14a1 1 0 0 1 .5-.86l.5-.29V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-4.09a1.5 1.5 0 1 0-1.52 2H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2v-2a8 8 0 0 0-8-8z"
})), 'Support');
var _default = create;
exports.default = _default;