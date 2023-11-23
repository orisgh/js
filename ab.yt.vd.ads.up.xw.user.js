// ==UserScript==

// @name               ab.yt.vd.ads.up.xw
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.yt.vd.ads.up.xw.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.yt.vd.ads.up.xw.user.js
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

// @match              https://www.youtube.com/watch?v=*

// ==/UserScript==

let blockList = `


ooooooooooooooooxwxw1111

ooooooooooooooooxwxw11
德国知事GermanCheese
大野猫 Big Wild Cat
歷史哥HistoryBro
真的很博通
观察者网

ooooooooooooooooxwxw22

ooooooooooooooooxwxw33

ooooooooooooooooxwxw44

ooooooooooooooooxwxw55

ooooooooooooooooxwxwjs
人畜无害小托比

ooooooooooooooooxwxwtw
中天電視
TVBS 優選頻道
TODAY 看世界
從台灣看見世界的故事

ooooooooooooooooxwxwen1

ooooooooooooooooxwxwen2

ooooooooooooooooxwxwen3
CNN-News18

ooooooooooooooooxwxwen4

ooooooooooooooooxwxwen5

ooooooooooooooooxwxw9999


`.trim().split('\n');

function aaaaaaaa() {
  let videoCards = document.querySelectorAll('ytd-compact-video-renderer.ytd-item-section-renderer');
  videoCards.forEach(videoCard => {
    let name = videoCard.querySelector('#text-container.ytd-channel-name>#text.ytd-channel-name');
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
