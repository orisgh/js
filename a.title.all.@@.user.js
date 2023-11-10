// ==UserScript==

// @name               a.title.all.@@
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.all.@@.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.all.@@.user.js
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

// @match              https://cn.pornhub.com/model/*
// @match              https://www.pornhub.com/model/*

// @match              https://live.bilibili.com/*
// @match              https://www.youtube.com/@*
// @match              https://www.youtube.com/c/*
// @match              https://www.ixigua.com/home/*
// @match              https://haokan.baidu.com/author/*

// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

(function () {
    'use strict';

    function aaaaaaaa() {

        const selectorsList = `
#channel-container #channel-name #text-container.ytd-channel-name yt-formatted-string.ytd-channel-name
h1 .user__name
.userinfo-authorname
h1
#head-info-vm .rows-ctnr .upper-row .left-ctnr .room-owner-username
`.trim().split('\n');

        for (const selector of selectorsList) {
            const element = document.querySelector(selector);
            if (element) {
                document.title = '@ @' + element.textContent;
                break;
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

    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey) {
            aaaaaaaa();
        }
    });

})();
