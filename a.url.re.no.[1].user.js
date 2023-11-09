// ==UserScript==

// @name               a.url.re.no.[1]
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.[1].user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.url.re.no.[1].user.js
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

// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

let url = new URL(window.location.href);
url.search = '';
let pathParts = url.pathname.split('/');
if (pathParts.length > 2) {
    pathParts = pathParts.slice(0, 2);
}
url.pathname = pathParts.join('/');
window.history.replaceState(null, null, url.toString());
