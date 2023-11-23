// ==UserScript==

// @name               ab.bili.ads.ad
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.ads.ad.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.ads.ad.user.js
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

.ooooooooooooooooooooooooaaaa

.oooooooooooooooooooooooovd
#bannerAd
#activity_vote
#slide_ad
#right-bottom-banner
.reply-notice
.ad-report
.ad-floor-exp
.ad-floor-cover
.slide-ad-exp
.activity-m-v1
.pop-live-small-mode
.video-card-ad-small
.video-page-special-card-small
.video-page-game-card-small

.oooooooooooooooooooooooobfq
.bpx-player-ending-wrap

.oooooooooooooooooooooooov

.oooooooooooooooooooooooozzzz

`.trim().split('\n');

function aaaaaaaa() {
  for (const selector of blockList) {
    const elements = document.querySelectorAll(selector);
    for (const element of elements) {
      element.style.display = 'none';
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
