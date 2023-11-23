// ==UserScript==

// @name               ab.bili.ss.ads.up.yx.hj
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.ss.ads.up.yx.hj.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.ss.ads.up.yx.hj.user.js
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

// @match              https://search.bilibili.com/*

// ==/UserScript==

let blockList = `

ooooooooooooooooaaaa

oooooooooooooooo33
红警魔鬼蓝天
红警假牙西
蓝天上的流云
可愛小羊毛

oooooooooooooooo55
答案4nswer

oooooooooooooooojc
红警银河
红警要塞
艾木魁
X小抖X
零言WispX

ooooooooooooooooxx
吟游大司人
坚韧的马老师

oooooooooooooooo最新
建国红警MAGA
扑街游戏厅

ooooooooooooooootkpage01
半泽同学
硬核豆浆
百百川
君悦OwO
一米鸭脖
未央央
L另唐
光哥game
酒痴东梦
一路往前-yilu
麻叽鸟游戏世界
渣渣就是玩儿
冰雪烤甜薯
东风谷级战列舰
五四IAM
橘子猪OP
我爱二次元FM
IMPUES1917
暗黑浏览器
夏末RacingXM
Miles麦大叔
暴君-小余
游戏退休局
Gigacore
画画峰

ooooooooooooooootkpage02

ooooooooooooooootkpage03
红警直播洛洛
国电武术馆馆长
-OmicronNEGA-
摸爬滚打的poi
憋憋桑
米尔桑
游戏达baka
藏三造紫浓_DoubleX
冰弦月
地球游戏研究员
戴子玲Himeko
无神论信仰指南
正在自费红警重制的熊

oooooooooooooooozzzz

`.trim().split('\n');

function aaaaaaaa() {

  let videoCards = document.querySelectorAll('.col_3.col_xs_1_5.col_md_2.col_xl_1_7.mb_x40');
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
