// ==UserScript==

// @name               aa.url.re.no.all
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/aa.url.re.no.all.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/aa.url.re.no.all.user.js
// @run-at             document-start
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @copyright          2023, nox (https://github.com/orisgh)
// @homepageURL        https://github.com/orisgh/nox.user.js

// @noframes
// @grant              none
// @connect            none
// @require            none

// @match              https://www.bilibili.com/video/BV*
// @match              https://live.bilibili.com/*
// @match              https://space.bilibili.com/*/dynamic*
// @match              https://message.bilibili.com/?spm_id_from=*

// @match              https://www.ixigua.com/home/*
// @match              https://www.ixigua.com/*

// @match              https://movie.douban.com/*
// @match              https://www.imdb.com/*

// @match              https://shidian.baike.com/*

// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

  let url = new URL(window.location.href);
  url.search = '';
  if (url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
  }
  window.history.replaceState({}, document.title, url.href);

}

aaaaaaaa();

setTimeout(aaaaaaaa, 4000);
setTimeout(aaaaaaaa, 8000);

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    setTimeout(aaaaaaaa, 1000);
  }

});
