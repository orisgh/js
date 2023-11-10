// ==UserScript==

// @name               a.title.all.h1
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.all.h1.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.all.h1.user.js
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
// @match              https://www.youtube.com/watch?v=*
// @match              https://www.youtube.com/hashtag/*
// @match              https://www.qiuwenbaike.cn/wiki/*
// @match              https://www.ixigua.com/*?logTag=*
// @match              https://zh.wikipedia.org/wiki/*
// @match              https://subhd.tv/a/*
// @match              https://subhd.tv/d/*
// @match              https://chrome.google.com/webstore/detail/*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

    const selectors = `
h1>.mw-page-title-main
h1>.yt-core-attributed-string
h1>yt-formatted-string
h1
`.trim().split('\n');

    const currentUrl = new URL(window.location.href);
    const domainName = currentUrl.hostname;
    for (const selector of selectors) {
        const element = document.querySelector(selector);
        if (element) {
            document.title = "p " + element.textContent + " pppp " + domainName;
            break;
        } else {
            console.error("error");
        }
    }

}

aaaaaaaa();

setTimeout(aaaaaaaa, 4000);
setTimeout(aaaaaaaa, 8000);

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        setTimeout(aaaaaaaa, 1000);
    }
});

document.addEventListener('keydown', function (event) {
    if (event.altKey) {
        aaaaaaaa();
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
