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

// @match              w
// @match              ww

// ==/UserScript==

function aaaaaaaa() {

  const selectors = `
h1>.mw-page-title-main
h1>.yt-core-attributed-string
h1>yt-formatted-string
h1
`.trim().split('\n');

  const currentUrl = new URL(window.location.href);
  const domainName = currentUrl.hostname;
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) {
      document.title = "p " + element.textContent + " pppp " + domainName;
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
