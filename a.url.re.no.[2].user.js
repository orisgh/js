// ==UserScript==

// @name               a.url.re.no.[2]
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.[2].user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.[2].user.js
// @run-at             document-start
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @copyright          2023, nox (https://github.com/orisgh)
// @homepageURL        https://github.com/orisgh/nox.user.script

// @noframes
// @grant              none
// @connect            none
// @require            none

// @match              https://www.bilibili.com/video/BV*
// @match              https://www.ixigua.com/home/*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

let url = new URL(window.location.href);
url.search = '';
let pathParts = url.pathname.split('/');
if (pathParts.length > 3) {
    pathParts = pathParts.slice(0, 3);
}
url.pathname = pathParts.join('/');
window.history.replaceState(null, null, url.toString());
