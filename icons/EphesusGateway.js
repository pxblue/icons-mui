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
    d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8.78 3l.62 1a3 3 0 0 0 5.2 0l.62-1h1.16l-.92 1.54a4 4 0 0 1-6.92 0L7.62 3zm4.93 9.52l-1.37.88a.64.64 0 0 1-.68 0l-1.37-.88a.61.61 0 0 1 0-1l1.37-.88a.64.64 0 0 1 .68 0l1.37.88a.61.61 0 0 1 0 1zM5 18.71v-1.42l1.61-1.61a3 3 0 0 0 .89-2.14V9.7a3 3 0 0 0-1.14-2.37L5 6.24V5l2 1.55A4 4 0 0 1 8.5 9.7v3.84a4 4 0 0 1-1.18 2.85zM15.22 21l-.62-1a3 3 0 0 0-5.2 0l-.62 1H7.62l.92-1.54a4 4 0 0 1 6.92 0l.92 1.54zM19 6.24l-1.36 1.09A3 3 0 0 0 16.5 9.7v3.84a3 3 0 0 0 .89 2.14L19 17.29v1.42l-2.32-2.32a4 4 0 0 1-1.18-2.85V9.7A4 4 0 0 1 17 6.55L19 5z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM8.78 3l.62 1a3 3 0 0 0 5.2 0l.62-1h1.16l-.92 1.54a4 4 0 0 1-6.92 0L7.62 3zm4.93 9.52l-1.37.88a.64.64 0 0 1-.68 0l-1.37-.88a.61.61 0 0 1 0-1l1.37-.88a.64.64 0 0 1 .68 0l1.37.88a.61.61 0 0 1 0 1zM5 18.71v-1.42l1.61-1.61a3 3 0 0 0 .89-2.14V9.7a3 3 0 0 0-1.14-2.37L5 6.24V5l2 1.55A4 4 0 0 1 8.5 9.7v3.84a4 4 0 0 1-1.18 2.85zM15.22 21l-.62-1a3 3 0 0 0-5.2 0l-.62 1H7.62l.92-1.54a4 4 0 0 1 6.92 0l.92 1.54zM19 6.24l-1.36 1.09A3 3 0 0 0 16.5 9.7v3.84a3 3 0 0 0 .89 2.14L19 17.29v1.42l-2.32-2.32a4 4 0 0 1-1.18-2.85V9.7A4 4 0 0 1 17 6.55L19 5z"
})), 'EphesusGateway');
var _default = create;
exports.default = _default;