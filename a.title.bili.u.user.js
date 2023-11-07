// ==UserScript==

// @name               a.title.bili.u
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.u.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.u.user.js
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

// @match              https://space.bilibili.com/*

// ==/UserScript==

function aaaaaaaa() {
    let selectors = [
        '#page-index',
        '#page-dynamic',
        '#page-video',
        '#page-myalbum',
        '#page-fav',
    ];

    if (selectors.some(selector => document.querySelector(selector))) {
        const title = document.querySelector('#h-name').textContent;
        document.title = '@ @' + title;
    }
}

aaaaaaaa();

setTimeout(4000);
setTimeout(8000);

document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        aaaaaaaa();
    }
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        setTimeout(1000);
    }
});

let ctrlDown = false;
let ctrlDownTime = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'Control') {
        ctrlDown = true;
        ctrlDownTime = Date.now();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 'Control') {
        ctrlDown = false;
        if (Date.now() - ctrlDownTime < 500) {
            aaaaaaaa();
        }
    }
});
