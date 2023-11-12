// ==UserScript==

// @name               aa.title.ss.search
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.title.ss.search.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.title.ss.search.user.js
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

// @match              https://subhd.tv/search/*
// @match              https://www.fuq.com/zh/search/*
// @match              https://www.ixxx.com/zh/search/*
// @match              https://www.qorno.com/search/*
// @match              https://www.pornhd.com/search/*
// @match              https://cn.xgroovy.com/search/*
// @match              https://www.metaporn.com/search/*
// @match              https://www.gotporn.com/search/*
// @match              https://www.tubegalore.com/zh/search/*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// @match              https://motherless.com/term/*
// @match              w
// @match              w
// @match              w

// ==/UserScript==

(function () {
  'use strict';

  function aaaaaaaa() {

    // 定义一个字符串，包含常见的关键路径名
    const keyPaths = `
search
term
`.trim().split('\n');

    // 获取当前页面的URL对象
    const url = new URL(window.location.href);

    // 定义一个函数，从URL中提取搜索词
    function getSearchTerm(url) {
      const pathArray = url.pathname.split("/");
      for (let key of keyPaths) {
        if (pathArray.includes(key)) {
          const keyIndex = pathArray.indexOf(key);
          if (pathArray[keyIndex + 1]) {
            return pathArray[keyIndex + 1];
          } else {
            return "";
          }
        }
      }
      return "";
    }

    // 定义一个函数，从URL中提取域名
    function getDomainName(url) {
      return url.hostname;
    }

    // 调用函数，获取搜索词和域名
    const searchTerm = getSearchTerm(url);
    const domainName = getDomainName(url);

    if (searchTerm) {
      document.title = "ssss " + searchTerm + " " + domainName;
    } else {
      console.log("No search term found.");
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
