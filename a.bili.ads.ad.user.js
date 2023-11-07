// ==UserScript==

// @name               a.bili.ads.ad
// @run-at             document-idle
// @version            2023.10
// @description        w

// @license            MIT
// @author             nox
// @copyright          2023, nox (https://github.com/orisgh)
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/nox.user.script
// @downloadURL        https://raw.githubusercontent.com/orisgh/nox.user.js/master/dist/w.user.js
// @updateURL          https://raw.githubusercontent.com/orisgh/nox.user.js/master/dist/w.user.js

// @grant              none

// @connect            none

// @require            none

// @match              https://www.bilibili.com/video/BV*

// ==/UserScript==

(function () {
    'use strict';

    let blockList = `

.ooooooooooooooooooooooooaaaa

.oooooooooooooooooooooooovd
#bannerAd
#activity_vote
#slide_ad
#right-bottom-banner
.reply-notice
.ad-report
.ad-floor-exp
.ad-floor-cover
.slide-ad-exp
.activity-m-v1
.pop-live-small-mode
.video-card-ad-small
.video-page-special-card-small
.video-page-game-card-small

.oooooooooooooooooooooooobfq
.bpx-player-ending-wrap

.oooooooooooooooooooooooov

.oooooooooooooooooooooooozzzz

`.trim().split('\n');

    function aaaaaaaa() {

        for (const selector of blockList) {
            const elements = document.querySelectorAll(selector);
            for (const element of elements) {
                element.style.display = 'none';
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

    let ctrlDown = false;
    let otherKeyDown = false;

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Control') {
            ctrlDown = true;
        } else {
            otherKeyDown = true;
        }
    });

    document.addEventListener('keyup', function (event) {
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

})();