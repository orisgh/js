// ==UserScript==

// @name               ab.bili.vd.dark
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.dark.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.dark.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        w
// @description:zz     w 参考自: https://github.com/Hill-98
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @copyright          2023, nox (https://github.com/orisgh)
// @homepageURL        https://github.com/orisgh/nox.user.js

// @noframes
// @connect            none
// @require            none

// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_registerMenuCommand

// @match              https://www.bilibili.com/video/BV*

// ==/UserScript==

const addStyle = function addStyle() {

    const id = 'bilibili-dark-theme';

    const style = document.createElement('style');

    style.id = id;

    style.innerHTML = `

    @import url("https://s1.hdslb.com/bfs/static/jinkela/long/laputa-css/dark.css");

    .reply-tag-item {
        background-color: var(--bg3) !important;
        color: var(--text2) !important;
    }

    `;

    document.getElementById(id)?.remove();

    document.body.append(style);

};

document.querySelector('html').style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
    addStyle();
    document.querySelector('html').style.display = '';

});
