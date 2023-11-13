// ==UserScript==

// @name               ab.github.releases.time
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.github.releases.time.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.github.releases.time.user.js
// @run-at             document-idle
// @version            2023.11

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/js
// @copyright          2023, nox (https://github.com/orisgh)

// @noframes
// @grant              none
// @connect            none
// @require            none

// @match              https://github.com/*/releases

// ==/UserScript==

const elements = document.querySelectorAll('relative-time.no-wrap');
elements.forEach((element) => {
  const datetime = element.getAttribute('datetime');
  const date = new Date(datetime).toISOString().split('T')[0];
  element.textContent = date;
});
