// ==UserScript==

// @name               a.title.bili.u.kjkj.lblb
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.u.kjkj.lblb.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.bili.u.kjkj.lblb.user.js
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

// @match              https://space.bilibili.com/*/channel/collectiondetail?sid=*

// ==/UserScript==

(function () {
    'use strict';

    function aaaaaaaa() {

        let selectors = [
            '#page-channel'
        ];

        if (selectors.some(selector => document.querySelector(selector))) {
            let hNameText = document.querySelector('#h-name').textContent;
            let breadcrumbText = document.querySelector('.breadcrumb>.item.cur').textContent;
            document.title = '@ kjkj lblb @' + hNameText + ' ' + breadcrumbText;

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

})();