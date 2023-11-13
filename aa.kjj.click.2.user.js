// ==UserScript==

// @name               aa.kjj.click.2
// @downloadURL        https://github.com/orisgh/js/raw/main/aa.kjj.click.2.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/aa.kjj.click.2.user.js
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
// @match              https://www.bilibili.com/bangumi/play/ep*
// @match              https://www.youtube.com/watch?v=*
// @match              https://www.ixigua.com/*
// @match              https://haokan.baidu.com/v?vid=*
// @match              https://www.douyin.com/user/*
// @match              https://live.bilibili.com/*
// @match              https://www.douyu.com/*
// @match              https://v.qq.com/*
// @match              https://www.iqiyi.com/*
// @match              https://v.youku.com/*

// ==/UserScript==

(function () {
  'use strict';

  let lastKeypressTime = 0;
  const keys = ["z", "x", "c", "v", "b"];

  document.addEventListener('keydown', function (e) {
    if (keys.includes(e.key)) {
      let thisKeypressTime = new Date();
      if (thisKeypressTime - lastKeypressTime <= 250) { // 如果两次按键间隔小于250毫秒
        const mediaElement = document.querySelector('audio, video');
        if (mediaElement) {
          if (mediaElement.paused) {
            mediaElement.play();
          } else {
            mediaElement.pause();
          }
        }
        thisKeypressTime = 0; // 重置时间，以防止三击事件
      }
      lastKeypressTime = thisKeypressTime;
    }
  });

})();
