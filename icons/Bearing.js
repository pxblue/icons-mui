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
  }, props), _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("g", {
    fill: "currentColor"
  }, _react["default"].createElement("path", {
    d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm5.67 15.64a1.5 1.5 0 10-2.13 0 1.49 1.49 0 002.13 0 8 8 0 01-11.28 0 1.5 1.5 0 100-2.13 1.49 1.49 0 000 2.13 8 8 0 010-11.28 1.5 1.5 0 102.13 0 1.49 1.49 0 00-2.13 0 8 8 0 0111.28 0 1.5 1.5 0 100 2.13 1.49 1.49 0 000-2.13 8 8 0 010 11.28z"
  }), _react["default"].createElement("path", {
    d: "M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3z"
  }), _react["default"].createElement("circle", {
    cx: "12",
    cy: "5.5",
    r: "1.5"
  }), _react["default"].createElement("circle", {
    cx: "12",
    cy: "18.5",
    r: "1.5"
  }), _react["default"].createElement("circle", {
    cx: "5.5",
    cy: "12",
    r: "1.5"
  }), _react["default"].createElement("circle", {
    cx: "18.5",
    cy: "12",
    r: "1.5"
  })), _react["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  })));
} : (0, _createSvgIcon["default"])(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("g", {
  fill: "currentColor"
}, _react["default"].createElement("path", {
  d: "M12 2a10 10 0 1010 10A10 10 0 0012 2zm5.67 15.64a1.5 1.5 0 10-2.13 0 1.49 1.49 0 002.13 0 8 8 0 01-11.28 0 1.5 1.5 0 100-2.13 1.49 1.49 0 000 2.13 8 8 0 010-11.28 1.5 1.5 0 102.13 0 1.49 1.49 0 00-2.13 0 8 8 0 0111.28 0 1.5 1.5 0 100 2.13 1.49 1.49 0 000-2.13 8 8 0 010 11.28z"
}), _react["default"].createElement("path", {
  d: "M12 7a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3z"
}), _react["default"].createElement("circle", {
  cx: "12",
  cy: "5.5",
  r: "1.5"
}), _react["default"].createElement("circle", {
  cx: "12",
  cy: "18.5",
  r: "1.5"
}), _react["default"].createElement("circle", {
  cx: "5.5",
  cy: "12",
  r: "1.5"
}), _react["default"].createElement("circle", {
  cx: "18.5",
  cy: "12",
  r: "1.5"
})), _react["default"].createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Bearing');
var _default = create;
exports["default"] = _default;