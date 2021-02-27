"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGetAllBlogs;

var _api = require("lib/api");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function useGetAllBlogs(req, res) {
  var data;
  return regeneratorRuntime.async(function useGetAllBlogs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _api.getAllBlogs)());

        case 2:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json(data));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}