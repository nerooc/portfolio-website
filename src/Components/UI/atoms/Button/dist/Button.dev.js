"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* button reset */\n  background: none repeat scroll 0 0 transparent;\n  border: medium none;\n\n  /* button style properties */\n  display: block;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: ", ";\n  font-size: 15px;\n  position: relative;\n  padding: ", ";\n  color: ", ";\n  transition: ", " ;\n  cursor: pointer;\n  box-sizing: border-box;\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: ", ";\n    background-color: ", ";\n    height: 100%;\n    width: ", ";\n    transition: all 0.2s ease 0s;\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    right: ", ";\n    top: 0;\n    background-color: ", ";\n    height: 100%;\n    width: ", ";\n    transition: all 0.2s ease 0s;\n  }\n\n  &:hover::before {\n    left: 0;\n  }\n\n  &:hover::after {\n    right: 0;\n  }\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n    font-weight: 600;\n    -webkit-box-shadow: inset 0px 0px 0px 2px\n      ", ";\n    -moz-box-shadow: inset 0px 0px 0px 2px\n      ", ";\n    box-shadow: inset 0px 0px 0px 2px\n      ", ";\n    cursor: pointer;\n\n    margin-left: 0;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.bold ? '900' : '600';
}, function (props) {
  return props.small ? '8px 15px' : '13px 30px';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.noTransition ? 'none' : 'all 0.5s ease 0.2s, margin-left 0.5s';
}, function (props) {
  return props.small ? '-7px' : '-30px';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.bold ? '4px' : '2px';
}, function (props) {
  return props.small ? '-7px' : '-30px';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.bold ? '4px' : '2px';
}, function (props) {
  return props.white ? 'black' : 'white';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.white ? 'white' : 'black';
});

var _default = Button;
exports["default"] = _default;