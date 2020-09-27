"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: Montserrat;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 38px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: 0.35538em;\n  color: #000000;\n  border: 10px solid black;\n  padding: 25px 65px 25px 65px;\n\n  @media (max-width: 630px) {\n    font-size: 18px;\n    padding: 15px 35px 15px 35px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionHeader = _styledComponents["default"].h1(_templateObject());

var _default = SectionHeader;
exports["default"] = _default;