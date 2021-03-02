"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exitPreview;

function exitPreview(_, res) {
  //req is not required, so using a placeholder
  res.clearPreviewData(); // Clears cookies

  res.writeHead(307, {
    Location: '/'
  }); // redirect to homepage

  res.end();
}