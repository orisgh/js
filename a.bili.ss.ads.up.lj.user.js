// ==UserScript==

// @name               a.bili.ss.ads.up.lj
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.ss.ads.up.lj.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.ss.ads.up.lj.user.js
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

// @match              https://search.bilibili.com/*

// ==/UserScript==

(function () {
    'use strict';

    let blockList = `

oooooooooooooooo1111

oooooooooooooooo1

oooooooooooooooo2

oooooooooooooooo3

oooooooooooooooo4

oooooooooooooooo5

oooooooooooooooo6

oooooooooooooooo7

oooooooooooooooo8

oooooooooooooooody
大聪看电影

ooooooooooooooookhkh
Fuji_玫瑰叔

oooooooooooooooozszsyxh
我和沙漠有个约定

oooooooooooooooo9999

`.trim().split('\n');

    function aaaaaaaa() {
        let videoCards = document.querySelectorAll('.col_3.col_xs_1_5.col_md_2.col_xl_1_7.mb_x40');
        videoCards.forEach(videoCard => {
            let name = videoCard.querySelector('.bili-video-card__info--author');
            if (blockList.includes(name.textContent)) {
                videoCard.style.display = 'none';
            }
        });
    }

    aaaaaaaa();

    setTimeout(4000);
    setTimeout(8000);

    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "visible") {
            setTimeout(1000);
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
