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
    d: "M12 12.59h-1.33v2.61h1.38a2 2 0 0 0 1.3-.34 1.24 1.24 0 0 0 .41-1c0-.86-.59-1.27-1.76-1.27zm1.15-1.94a1 1 0 0 0 .39-.89.88.88 0 0 0-.42-.82 2.68 2.68 0 0 0-1.33-.25h-1.12v2.22h1.23a2.33 2.33 0 0 0 1.25-.26z"
  }), _react.default.createElement("path", {
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 14.18a4.3 4.3 0 0 1-2.69.77H8.55V7h3.12a6 6 0 0 1 3.08.61 2.09 2.09 0 0 1 1 1.92 2.42 2.42 0 0 1-.46 1.47 1.62 1.62 0 0 1-1.12.69v.07a2.21 2.21 0 0 1 1.37.79 2.61 2.61 0 0 1 .46 1.5 2.53 2.53 0 0 1-1 2.13z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M12 12.59h-1.33v2.61h1.38a2 2 0 0 0 1.3-.34 1.24 1.24 0 0 0 .41-1c0-.86-.59-1.27-1.76-1.27zm1.15-1.94a1 1 0 0 0 .39-.89.88.88 0 0 0-.42-.82 2.68 2.68 0 0 0-1.33-.25h-1.12v2.22h1.23a2.33 2.33 0 0 0 1.25-.26z"
}), _react.default.createElement("path", {
  d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3 14.18a4.3 4.3 0 0 1-2.69.77H8.55V7h3.12a6 6 0 0 1 3.08.61 2.09 2.09 0 0 1 1 1.92 2.42 2.42 0 0 1-.46 1.47 1.62 1.62 0 0 1-1.12.69v.07a2.21 2.21 0 0 1 1.37.79 2.61 2.61 0 0 1 .46 1.5 2.53 2.53 0 0 1-1 2.13z"
})), 'GradeB');
var _default = create;
exports.default = _default;