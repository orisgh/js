// ==UserScript==

// @name               a.url.re.yes.site.wikipedia
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.url.re.yes.site.wikipedia.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.url.re.yes.site.wikipedia.user.js
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

// @match              https://zh.wikipedia.org/zh-*

// ==/UserScript==

let url = new URL(window.location.href);
url.search = '';
let newPathname = url.pathname.replace(/zh-.*\/(.*)/, 'wiki/$1');
url.pathname = newPathname;
window.location.href = url.href;
