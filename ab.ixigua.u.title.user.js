// ==UserScript==

// @name               ab.ixigua.u.title
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.ixigua.u.title.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.ixigua.u.title.user.js
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

// @match              https://www.ixigua.com/home/*

// ==/UserScript==

function aaaaaaaa() {

  let fieldInfo = document.querySelector('.userDetailV3__header__textInfo>p>span:nth-child(2)').innerText;
  let field = '';
  let match = fieldInfo.match(/(优质|知名)(.{2})领域创作者/);
  if (match) {
    field = match[2];
  }
  let userName = document.querySelector('h1 .user__name').innerText;
  document.title = '@' + field + '@ @' + userName;

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
