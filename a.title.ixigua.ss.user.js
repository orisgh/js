// ==UserScript==

// @name               a.title.ixigua.ss
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.ixigua.ss.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.ixigua.ss.user.js
// @run-at             document-start
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

// @match              https://www.ixigua.com/search/*

// ==/UserScript==

(function() {
    'use strict';

    function aaaaaaaa() {
        let search_input = document.querySelector('input[type="search"]');
        if (search_input) {
            let search_term = search_input.value;
            document.title = search_term;
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
