// ==UserScript==

// @name               azzzz
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/.user.js
// @run-at             document-idle
// @version            2023.11

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

// @match              <$URL$>

// ==/UserScript==

(function () {
    'use strict';

    function aaaaaaaa() {

        // code

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
