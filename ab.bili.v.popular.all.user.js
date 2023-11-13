// ==UserScript==

// @name               ab.bili.v.popular.all
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.v.popular.all.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.v.popular.all.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/js
// @copyright          2023, nox (https://github.com/orisgh)

// @noframes
// @connect            none
// @require            none
// @grant              none

// @match              https://www.bilibili.com/v/popular/*

// ==/UserScript==

(function () {
  'use strict';

  function aaaaaaaa() {

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
