"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t/* button reset */\n\tbackground: none repeat scroll 0 0 transparent;\n\tborder: medium none;\n\t\n\t/* button style properties */\n\tdisplay: block;\n\tfont-family: 'Montserrat', sans-serif;\n\tfont-weight: 600;\n\tfont-size: 15px;\n\tposition: relative;\n\tpadding: 13px 30px;\n\tcolor: ", ";\n\ttransition: all 0.5s ease 0.2s, margin-left 0.5s;\n\tcursor: pointer;\n\tbox-sizing: border-box;\n\n\n\t&::before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: -30px;\n\t\tbackground-color: ", ";\n\t\theight: 100%;\n\t\twidth: 2px;\n\t\ttransition: all 0.2s ease 0s;\n\t}\n\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\tright: -30px;\n\t\ttop: 0;\n\t\tbackground-color: ", ";\n\t\theight: 100%;\n\t\twidth: 2px;\n\t\ttransition: all 0.2s ease 0s;\n\t}\n\n\t&:hover::before {\n\t\tleft: 0;\n\t}\n\n\t&:hover::after {\n\t\tright: 0;\n\t}\n\n\t&:hover {\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t\tfont-weight: 600;\n\t\t-webkit-box-shadow: inset 0px 0px 0px 2px ", ";\n\t\t-moz-box-shadow: inset 0px 0px 0px 2px ", ";\n\t\tbox-shadow: inset 0px 0px 0px 2px ", ";\n\t\tcursor: pointer;\n\n\t\tmargin-left: 0;\n\t}\n\n\t&:focus { outline: none; }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.white ? 'white' : 'black';
}, function (props) {
  return props.white ? 'white' : 'black';
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