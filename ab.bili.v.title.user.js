// ==UserScript==

// @name               ab.bili.v.title
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.v.title.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.v.title.user.js
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

// @match              https://www.bilibili.com/v/*

// ==/UserScript==

function aaaaaaaa() {

  function getTextContent(selector) {
    const element = document.querySelector(selector);
    return element ? element.textContent : '';
  }

  document.title = '/v ' + getTextContent('.channel-nav-name') + ' ' + getTextContent('button.channel-nav-sub-item.channel-nav-sub-item-actived') + ' ' + getTextContent('button.tags-item.is-activity');

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
