// ==UserScript==

// @name               a.url.re.no.%s.all
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.%s.all.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.%s.all.user.js
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

// @match              https://movie.douban.com/*
// @match              https://www.imdb.com/*
// @match              https://shidian.baike.com/*
// @match              https://live.bilibili.com/*

// @match              https://space.bilibili.com/*/dynamic*
// @match              https://www.bilibili.com/video/BV*
// @match              https://message.bilibili.com/?spm_id_from=*
// @match              https://www.ixigua.com/*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

    let url = new URL(window.location.href);
    url.search = '';
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
