"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBlogs = getAllBlogs;

var _sanity = _interopRequireDefault(require("./sanity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blogFields = "\ntitle, \nsubtitle, \nslug,\ndate,\n'coverImage': coverImage.asset->url\n";

function getAllBlogs() {
  var res;
  return regeneratorRuntime.async(function getAllBlogs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_sanity["default"].fetch("*[_type == \"blog\"]{".concat(blogFields, "}")));

        case 2:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}