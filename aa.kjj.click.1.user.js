// ==UserScript==

// @name               aa.kjj.click.1
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.kjj.click.1.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.kjj.click.1.user.js
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

// @match              https://www.bilibili.com/video/BV*
// @match              https://www.bilibili.com/bangumi/play/ep*
// @match              https://www.youtube.com/watch?v=*
// @match              https://www.ixigua.com/*
// @match              https://haokan.baidu.com/v?vid=*
// @match              https://www.douyin.com/user/*
// @match              https://live.bilibili.com/*
// @match              https://www.douyu.com/*
// @match              https://www.huya.com/*
// @match              https://v.qq.com/*
// @match              https://www.iqiyi.com/*
// @match              https://v.youku.com/*

// ==/UserScript==

(function () {
  'use strict';

  var keySelectorsMap = {


    // q 点赞
    // w 投币
    // e 收藏
    // r 分享
    // t 宽屏

    // y
    "y": `
.aaaa
`.trim().split('\n'),

    // u
    "u": `
.aaaa
`.trim().split('\n'),

    // i
    "i": `
.aaaa
`.trim().split('\n'),

    // o
    "o": `
.aaaa
`.trim().split('\n'),

    // p.bfq.字幕
    "p": `
.bpx-player-ctrl-btn.bpx-player-ctrl-subtitle
`.trim().split('\n'),


    // a.播放暂停  b站.其他脚本
    "a": `
.ytp-chrome-bottom button.ytp-play-button.ytp-button
`.trim().split('\n'),

    // s.关灯
    // .bui-checkbox-input[aria-label="关灯模式"]
    "s": `
.bpx-player-ctrl-setting-checkbox.bpx-player-ctrl-setting-lightoff .bui-area .bui-checkbox-input
`.trim().split('\n'),

    // d.弹幕
    "d": `
.aaaa
`.trim().split('\n'),

    // f.bfq.全屏.bili番剧.西瓜
    "f": `
.squirtle-fullscreen-wrap
.squirtle-fullscreen-wrap>.squirtle-video-fullscreen
.squirtle-fullscreen-wrap>.squirtle-video-fullscreen>.squirtle-svg-icon
.art-control.art-control-fullscreen
`.trim().split('\n'),

    // g.bfq.网页全屏
    "g": `
.bpx-player-ctrl-btn.bpx-player-ctrl-web
.squirtle-pagefullscreen-wrap>.squirtle-video-pagefullscreen
.art-control.art-control-fullscreenWeb
`.trim().split('\n'),

    // h.bfq.画中画
    "h": `
.bpx-player-ctrl-btn.bpx-player-ctrl-pip
.squirtle-pip-wrap
.squirtle-pip-wrap>.squirtle-video-pip
.art-control.art-control-fullscreen
`.trim().split('\n'),

    // j.up空间.bilivd
    "j": `
.up-panel-container .up-name
`.trim().split('\n'),

    // k.动态
    "k": `
.bili-header .v-popover-wrap:nth-child(4) .right-entry__outside
`.trim().split('\n'),

    // l.ding.bili消息点赞
    "l": `
.bili-header .v-popover-wrap:nth-child(3) .message-entry-popover .message-inner-list__item:nth-child(3)
`.trim().split('\n'),


    // z
    // x
    // c
    // v
    // b
    // n
    // m


    // F1 浏览器.翻译
    // F2 播放暂停
    // F3
    // F4


    // F5
    // F6
    // F7
    // F8


    // F9
    // F10
    // F11
    // F12


    // ` 播放暂停
    // tab
    // insert


  };

  document.addEventListener('keydown', function (e) {
    const selectors = keySelectorsMap[e.key];
    if (selectors) {
      selectors.some(function (selector) {
        const element = document.querySelector(selector);
        if (element) {
          element.click();
          return true;
        }
      });
    }
  });

})();
