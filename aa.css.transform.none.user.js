// ==UserScript==

// @name               aa.css.transform.none
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.css.transform.none.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.css.transform.none.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        尝试接管世界！
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @homepageURL        https://github.com/orisgh/js
// @copyright          2023, nox (https://github.com/orisgh)

// @noframes
// @connect            none
// @require            none
// @grant              none

// @match              https://*.bilibili.com/*

// ==/UserScript==

(function () {
  'use strict';

  function aaaaaaaa() {

    // 获取网页中的所有元素
    const allElements = document.querySelectorAll('*');

    // 遍历所有元素
    for (const element of allElements) {
      // 获取元素的计算样式
      const computedStyle = getComputedStyle(element);

      // 如果元素已经设置了 transform 属性，则将其设置为 none
      if (computedStyle.transform !== 'none') {
        element.style.transform = 'none';
      }

      // 如果元素已经设置了 transition 属性，则将其设置为 none
      if (computedStyle.transition !== 'all 0s ease 0s') {
        element.style.transition = 'none';
      }

      // 如果元素的 position 属性为 fixed，则将其设置为 relative
      if (computedStyle.position === 'fixed') {
        element.style.position = 'relative';
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
