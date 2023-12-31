// ==UserScript==

// @name               aa.url.re.no.%s
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.url.re.no.%25s.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.url.re.no.%25s.user.js
// @run-at             document-start
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/js
// @copyright          2023, nox (https://github.com/orisgh)

// @noframes
// @connect            none
// @require            none
// @grant              none

// @match              https://search.bilibili.com/*
// @match              https://t.bilibili.com/*

// @match              https://www.youtube.com/results?search_query=*
// @match              https://www.google.com/search?q=*
// @match              https://www.wuzhuiso.com/s?q=*





// ==/UserScript==

/*
// @match              
*/

function aaaaaaaa() {

  const whitelist = [
    "keyword",
    "tab",
    "search_query",
    "q",
    "v",
    "query",
    "text",
  ];

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  for (let param of params.keys()) {
    if (!whitelist.includes(param)) {
      params.delete(param);
    }
  }
  url.search = params.toString();
  url.pathname = url.pathname.replace(/\/$/, '');
  window.history.replaceState(null, null, url.toString());

}

aaaaaaaa();

setTimeout(aaaaaaaa, 4000);
setTimeout(aaaaaaaa, 8000);

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    setTimeout(aaaaaaaa, 1000);
  }

});
