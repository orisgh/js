// ==UserScript==

// @name               a.title.bili.v
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.v.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.v.user.js
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

// @match              https://www.bilibili.com/v/*

// ==/UserScript==

function aaaaaaaa() {

    function getTextContent(selector) {
        const element = document.querySelector(selector);
        return element ? element.textContent : '';
    }

    document.title = '/v ' + getTextContent('.channel-nav-name') + ' ' + getTextContent('button.channel-nav-sub-item.channel-nav-sub-item-actived') + ' ' + getTextContent('button.tags-item.is-activity');

}

aaaaaaaa();

setTimeout(aaaaaaaa, 4000);
setTimeout(aaaaaaaa, 8000);

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        setTimeout(aaaaaaaa, 1000);
    }
});

let ctrlDown = false;
let otherKeyDown = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Control') {
        ctrlDown = true;
    } else {
        otherKeyDown = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'Control') {
        if (ctrlDown && !otherKeyDown) {
            aaaaaaaa();
        }
        ctrlDown = false;
        otherKeyDown = false;
    } else {
        otherKeyDown = false;
    }
});
