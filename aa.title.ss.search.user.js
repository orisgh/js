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
// @connect            none
// @require            none
// @grant              none

// @match              https://subhd.tv/search/*





// ==/UserScript==
/*
// @match              
*/
(function () {
  'use strict';

  function aaaaaaaa() {

    const keyPaths = `
search
term
`.trim().split('\n');

    const url = new URL(window.location.href);

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

    function getMainDomain(url) {
      const domainParts = url.hostname.split('.');
      return domainParts[domainParts.length - 2];
    }

    const searchTerm = getSearchTerm(url);
    const mainDomain = getMainDomain(url);

    if (searchTerm) {
      document.title = "ssss " + searchTerm + " " + mainDomain;
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
