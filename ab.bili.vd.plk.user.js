// ==UserScript==

// @name               ab.bili.vd.plk
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.plk.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.plk.user.js
// @run-at             document-idle
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

// ==/UserScript==

function updateStyle(id, css) {
  let style = document.getElementById(id);

  if (!style) {
    style = document.createElement('style');
    style.id = id;
    document.head.appendChild(style);
  }

  style.innerHTML = css;
}

document.addEventListener('DOMContentLoaded', function () {
  updateStyle('style', `
        .main-reply-box {
            display: none !important;
        }
    `);

  const navTitleText = document.querySelector('.nav-title-text');

  navTitleText.addEventListener('click', function () {
    updateStyle('style', `
            #comment .main-reply-box {
                display: block !important;
            }
        `);
  });
});
