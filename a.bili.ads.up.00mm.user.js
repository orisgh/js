// ==UserScript==

// @name               a.bili.ads.up.00mm
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.ads.up.00mm.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.ads.up.00mm.user.js
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

// @match              https://www.bilibili.com/

// ==/UserScript==

(function () {
    'use strict';

    let blockList = `

ooooooooooooooooaaaa

oooooooooooooooolsls

oooooooooooooooomsms

oooooooooooooooowwww

ooooooooooooooooyxyx

oooooooooooooooohjhj

oooooooooooooooozszs走进科学
自说自话的总裁
环球异事R
环球揭秘RO
揭秘Rx
新报-观察

oooooooooooooooo厚黑学
啊粥粥啊粥

oooooooooooooooojsjs
校尉说

oooooooooooooooozzzz

`.trim().split('\n');

    function aaaaaaaa() {
        let videoCards = document.querySelectorAll('.container.is-version8>div[data-v-7ae03d4e]');
        videoCards.forEach(videoCard => {
            let name = videoCard.querySelector('.bili-video-card__info--author');
            if (blockList.includes(name.textContent)) {
                videoCard.style.display = 'none';
            }
        });
    }

    aaaaaaaa();

    setTimeout(aaaaaaaa, 5000);

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            setTimeout(aaaaaaaa, 1000);
        }
    });

    let ctrlDown = false;
    let otherKeyDown = false;

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Control') {
            ctrlDown = true;
        } else {
            otherKeyDown = true;
        }
    });

    document.addEventListener('keyup', function (e) {
        if (e.key === 'Control') {
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
