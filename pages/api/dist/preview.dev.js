"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = enablePreview;

var _api = require("lib/api");

function enablePreview(req, res) {
  var blog;
  return regeneratorRuntime.async(function enablePreview$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.query.secret !== process.env.SANITY_STUDIO_PROJECT_SECRET || !req.query.slug)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            message: 'Invalid Token'
          }));

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _api.getBlogBySlug)(req.query.slug));

        case 4:
          blog = _context.sent;

          if (blog) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(401).json({
            message: 'Invalid Slug'
          }));

        case 7:
          // setPreviewData() will set some cookies in the browser, which will inform NextJS as to display the page in-
          //- preview mode
          // Cookies => __next_preview_data  |  __prerender_bypass
          res.setPreviewData({});
          res.writeHead(307, {
            Location: "/blogs/".concat(blog.slug)
          });
          res.end();
          return _context.abrupt("return", res.status(200).json({
            message: 'You may proceed...'
          }));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}