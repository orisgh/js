// ==UserScript==

// @name               a.url.re.yes.site.bili.u
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.url.re.yes.site.bili.u.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.url.re.yes.site.bili.u.user.js
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

// @match              https://space.bilibili.com/*

// ==/UserScript==

let url = new URL(window.location.href);
url.search = '';
let pathSegments = url.pathname.split('/').filter(segment => segment);
if (pathSegments.length === 1 && !isNaN(pathSegments[0])) {
    window.location.href = `${url.origin}/${pathSegments[0]}/video`;
}
