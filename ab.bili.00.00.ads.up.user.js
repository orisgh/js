// ==UserScript==

// @name               ab.bili.00.00.ads.up
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.00.00.ads.up.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.00.00.ads.up.user.js
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

// @match              https://www.bilibili.com/

// ==/UserScript==

let blockList = `

ooooooooooooooooaaaa

oooooooooooooooolsls

oooooooooooooooomsms

oooooooooooooooowwww

ooooooooooooooooyxyx

oooooooooooooooohjhj

oooooooooooooooozszs走进科学
自说自话的总裁
环球异事R
环球揭秘RO
揭秘Rx
新报-观察

oooooooooooooooo厚黑学
啊粥粥啊粥

oooooooooooooooojsjs
校尉说

oooooooooooooooozzzz

`.trim().split('\n');

function aaaaaaaa() {
  let videoCards = document.querySelectorAll('.container.is-version8>div[data-v-7ae03d4e]');
  videoCards.forEach(videoCard => {
    let name = videoCard.querySelector('.bili-video-card__info--author');
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
