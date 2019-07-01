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
    d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5.75 14.59l-1.25 1.25a.54.54 0 0 1-.76 0l-5-4.95a3.54 3.54 0 0 1-4.4-4.83l2.39 2.33 1.63-1.63L8 6.43a3.6 3.6 0 0 1 4 .7 3.49 3.49 0 0 1 .82 3.75l4.94 4.95a.49.49 0 0 1-.01.76z"
  })));
} : (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm5.75 14.59l-1.25 1.25a.54.54 0 0 1-.76 0l-5-4.95a3.54 3.54 0 0 1-4.4-4.83l2.39 2.33 1.63-1.63L8 6.43a3.6 3.6 0 0 1 4 .7 3.49 3.49 0 0 1 .82 3.75l4.94 4.95a.49.49 0 0 1-.01.76z"
})), 'Maintenance');
var _default = create;
exports.default = _default;