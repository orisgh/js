// ==UserScript==

// @name               ab.ixigua.ss.title
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.ixigua.ss.title.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.ixigua.ss.title.user.js
// @run-at             document-start
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

// @match              https://www.ixigua.com/search/*

// ==/UserScript==

(function () {
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
