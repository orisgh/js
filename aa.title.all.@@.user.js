// ==UserScript==

// @name               aa.title.all.@@
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.title.all.@@.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.title.all.@@.user.js
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

// @match              https://live.bilibili.com/*
// @match              https://www.youtube.com/@*
// @match              https://www.youtube.com/c/*
// @match              https://www.ixigua.com/home/*
// @match              https://haokan.baidu.com/author/*





// ==/UserScript==

/*
// @match              
*/

function aaaaaaaa() {

  const selectorsList = `
    #text.ytd-channel-name
    .userinfo-authorname
    #head-info-vm .rows-ctnr .upper-row .left-ctnr .room-owner-username
    h1 .user__name
    h1
`.trim().split('\n');

  for (const selector of selectorsList) {
    const element = document.querySelector(selector);
    if (element) {
      document.title = '@ @' + element.textContent;
      break;
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
