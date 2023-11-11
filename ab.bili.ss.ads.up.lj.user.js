// ==UserScript==

// @name               ab.bili.ss.ads.up.lj
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.bili.ss.ads.up.lj.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.bili.ss.ads.up.lj.user.js
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
