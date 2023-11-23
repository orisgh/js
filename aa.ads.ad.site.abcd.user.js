// ==UserScript==

// @name               aa.ads.ad.site.abcd
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.ads.ad.site.abcd.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.ads.ad.site.abcd.user.js
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





// ==/UserScript==

/*
// @match              
*/

const blockLists = {


  'a.com': `
#oooooooo
.oooooooo
`,


  'b.com': `
#oooooooo
.oooooooo
`,


  'c.com': `
#oooooooo
.oooooooo
`,


  'd.com': `
#oooooooo
.oooooooo
`,


  'e.com': `
#oooooooo
.oooooooo
`,


  'f.com': `
#oooooooo
.oooooooo
`,


  'g.com': `
#oooooooo
.oooooooo
`,


  'z.com': `
#oooooooo
.oooooooo
`


};

function aaaaaaaa() {

  const domain = window.location.hostname;
  const blockList = (blockLists[domain] || '').trim().split('\n');
  for (const selector of blockList) {
    const elements = document.querySelectorAll(selector);
    for (const element of elements) {
      element.style.setProperty('display', 'none', 'important');
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
