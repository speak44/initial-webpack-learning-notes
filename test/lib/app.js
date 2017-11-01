"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require("React");

var _React2 = _interopRequireDefault(_React);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _myName = require("./component/myName");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var Objname = (0, _myName.c)('sal');
_reactDom2.default.render(_React2.default.createElement(
  "div",
  null,
  "hello,React"
), document.getElementById('root'));
console.log(_extends({}, obj, Objname));