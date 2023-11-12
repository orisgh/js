// ==UserScript==

// @name               ab.bili.u.title.kjkj.lblb
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.u.title.kjkj.lblb.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.u.title.kjkj.lblb.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/js
// @copyright          2023, nox (https://github.com/orisgh)

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
