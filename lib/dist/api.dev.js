"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllBlogs = getAllBlogs;
exports.getBlogBySlug = getBlogBySlug;

var _sanity = _interopRequireDefault(require("./sanity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var blogFields = "\ntitle, \nsubtitle, \nslug,\ndate,\n'author': author->{name,'avatar': avatar.asset->url},\n'coverImage': coverImage.asset->url\n";
/* url to the coverImage is available under the asset prop, while for author, nothing as an asset needs to be asccessed, sa the _ref is available
under author by default | {} -> specify only the required data */

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

function getBlogBySlug(slug) {
  var res;
  return regeneratorRuntime.async(function getBlogBySlug$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_sanity["default"].fetch("*[_type == \"blog\" && slug == $slug]{".concat(blogFields, "}"), {
            slug: slug
          }));

        case 2:
          res = _context2.sent;
          return _context2.abrupt("return", res[0]);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}