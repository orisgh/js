// ==UserScript==

// @name               aa.title.all.h1
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.title.all.h1.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.title.all.h1.user.js
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

// @match              https://www.bilibili.com/video/BV*
// @match              https://www.youtube.com/watch?v=*
// @match              https://www.youtube.com/hashtag/*
// @match              https://www.ixigua.com/*?logTag=*

// @match              https://zh.wikipedia.org/wiki/*
// @match              https://www.qiuwenbaike.cn/wiki/*

// @match              https://subhd.tv/a/*
// @match              https://subhd.tv/d/*
// @match              https://chrome.google.com/webstore/detail/*

// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

  const selectors = `
h1>.mw-page-title-main
h1>.yt-core-attributed-string
h1>yt-formatted-string
h1
`.trim().split('\n');

  const currentUrl = new URL(window.location.href);
  const domainParts = currentUrl.hostname.split('.');
  const mainDomain = domainParts[domainParts.length - 2];
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      document.title = "p " + element.textContent + " pppp " + mainDomain;
      break;
    } else {
      console.error("error");
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
