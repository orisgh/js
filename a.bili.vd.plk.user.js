// ==UserScript==

// @name               a.bili.vd.plk
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.vd.plk.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.vd.plk.user.js
// @run-at             document-idle
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

// ==/UserScript==

const style1 = document.createElement('style');
style1.innerHTML = `
        .main-reply-box {
            display: none !important;
        }
    `;

const style2 = document.createElement('style');
style2.innerHTML = `
        #comment .main-reply-box {
            display: block !important;
        }
    `;

setTimeout(function() {
    document.head.appendChild(style1);
}, 8000);

document.addEventListener('DOMContentLoaded', function() {
    const navTitleText = document.querySelector('.nav-title-text');

    navTitleText.addEventListener('click', function () {
        document.head.appendChild(style2);
    });
});
