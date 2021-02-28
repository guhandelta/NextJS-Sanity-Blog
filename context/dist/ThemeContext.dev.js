"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContext = exports.themes = void 0;

var _react = require("react");

var themes = {
  light: {
    type: 'light',
    fontColor: '#2b2c38',
    background: '#f4f7f9'
  },
  dark: {
    type: 'dark',
    fontColor: '#dcdcdc',
    background: '#2b2c38'
  }
};
exports.themes = themes;
var ThemeContext = (0, _react.createContext)({});
exports.ThemeContext = ThemeContext;