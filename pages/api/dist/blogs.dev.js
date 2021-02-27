"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGetAllBlogs;

var _api = require("lib/api");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function useGetAllBlogs(req, res) {
  var offset, data;
  return regeneratorRuntime.async(function useGetAllBlogs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Assign 0 if offset is undefined and parse the offset to int, as it will be a string
          offset = parseInt(req.query.offset || 0, 10); // 10 => radix 10 for decimal system

          _context.next = 3;
          return regeneratorRuntime.awrap((0, _api.getAllBlogs)({
            offset: offset
          }));

        case 3:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json(data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}