// ==UserScript==

// @name               ab.bili.vd.ads.up.lj
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.vd.ads.up.lj.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.vd.ads.up.lj.user.js
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

// ==/UserScript==

let blockList = `

oooooooooooooooolslsaaaa
oooooooooooooooolsls11
oooooooooooooooolsls22
刚刚的历史枕边书
oooooooooooooooolsls33
oooooooooooooooolsls44
oooooooooooooooolsls55
oooooooooooooooolslszzzz

oooooooooooooooowwwwaaaa
oooooooooooooooowwww11
oooooooooooooooowwww22
oooooooooooooooowwww33
oooooooooooooooowwww44
马佳PopMatta
oooooooooooooooowwww55
oooooooooooooooowwwwzzzz

oooooooooooooooohjhjaaaa
oooooooooooooooohjhj11
oooooooooooooooohjhj22
oooooooooooooooohjhj33
oooooooooooooooohjhj44
oooooooooooooooohjhj55
oooooooooooooooohjhjtk
oooooooooooooooohjhjxx
oooooooooooooooohjhjzzzz

oooooooooooooooozszsaaaa
oooooooooooooooozszs11
oooooooooooooooozszs22
oooooooooooooooozszs33
oooooooooooooooozszs44
oooooooooooooooozszs55
oooooooooooooooozszs走进科学
自说自话的总裁
新报-观察
oooooooooooooooozszszzzz

`.trim().split('\n');

function aaaaaaaa() {
  let videoCards = document.querySelectorAll('.video-page-card-small');
  videoCards.forEach(videoCard => {
    let name = videoCard.querySelector('.name');
    if (blockList.includes(name.textContent)) {
      videoCard.style.display = 'none';
    }
  });
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
