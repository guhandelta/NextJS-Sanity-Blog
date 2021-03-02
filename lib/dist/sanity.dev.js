"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.previewClient = void 0;

var _client = _interopRequireDefault(require("@sanity/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
  /*useCdn: 
           true => Returns fast response by fetching cached data
           false => Returns a little bit slow response by fetching latest data */

};
var previewClient = (0, _client["default"])(_objectSpread({}, options, {
  useCdn: false,
  // token is a specific token api in the Sanity app
  token: process.env.SANITY_API_TOKEN
}));
exports.previewClient = previewClient;

var _default = (0, _client["default"])(options);

exports["default"] = _default;