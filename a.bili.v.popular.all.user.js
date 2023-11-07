// ==UserScript==

// @name               a.bili.v.popular.all
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.v.popular.all.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.v.popular.all.user.js
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

// @match              https://www.bilibili.com/v/popular/*

// ==/UserScript==

(function () {
    'use strict';

    function aaaaaaaa () {

        let cards = document.querySelectorAll('.card-list > .video-card, .video-list > .video-card');
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].classList.contains('counted')) {
                let counter = document.createElement('span');
                counter.textContent = i + 1;
                cards[i].appendChild(counter);
                cards[i].classList.add('counted');
            }
        }
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
