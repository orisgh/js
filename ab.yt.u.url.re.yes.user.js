// ==UserScript==

// @name               ab.yt.u.url.re.yes
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.yt.u.url.re.yes.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.yt.u.url.re.yes.user.js
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

// @match              https://www.youtube.com/@*

// ==/UserScript==

let url = new URL(window.location.href);
url.search = '';
let pathParts = url.pathname.split('/');
if (pathParts.length === 2) {
  let userId = pathParts[1];
  url.pathname = `${userId}/videos`;
  window.location.href = url.toString();
}
