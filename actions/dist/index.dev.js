"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetBlogs = exports.useGetHello = void 0;

var _swr = _interopRequireDefault(require("swr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// SWR - Stale-While-Revalidate => Provide data from cache, while the req sent in parallel will fetch the updated data adn update the UI with-
//- with latest data, once res arrives
// Making a req to fetch more blogs througha useEffect(()=>{},[]) will throw a CORS error
// This fn() will will make a call ti lib/api, which will be executed in the server => preventing CORS error
var fetcher = function fetcher(url) {
  return fetch(url).then(function (res) {
    return res.json();
  });
};

var useGetHello = function useGetHello() {
  return (0, _swr["default"])('/api/hello', fetcher);
};

exports.useGetHello = useGetHello;

var useGetBlogs = function useGetBlogs() {
  return (0, _swr["default"])('/api/blogs', fetcher);
};

exports.useGetBlogs = useGetBlogs;