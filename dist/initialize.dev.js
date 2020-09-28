"use strict";

var _reactGa = _interopRequireDefault(require("react-ga"));

var _auth = _interopRequireDefault(require("./auth.ts"));

var _keys = require("./src/keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Sample authentication provider
_reactGa["default"].initialize(_keys.trackingId);

_reactGa["default"].set({
  userId: _auth["default"].currentUserId()
});