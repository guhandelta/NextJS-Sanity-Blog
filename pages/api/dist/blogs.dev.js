"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGetAllBlogs;

var _api = require("lib/api");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function useGetAllBlogs(req, res) {
  var offset, date, data;
  return regeneratorRuntime.async(function useGetAllBlogs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Assign 0 if offset is undefined and parse the offset to int, as it will be a string
          offset = parseInt(req.query.offset || 0, 10); // 10 => radix 10 for decimal system

          date = req.query.date || 'desc';
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _api.getPaginatedBlogs)({
            offset: offset,
            date: date
          }));

        case 4:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json(data));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}