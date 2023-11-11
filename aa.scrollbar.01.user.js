// ==UserScript==

// @name               aa.scrollbar.01
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/aa.scrollbar.01.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/aa.scrollbar.01.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @copyright          2023, nox (https://github.com/orisgh)
// @homepageURL        https://github.com/orisgh/nox.user.js

// @noframes
// @grant              none
// @connect            none
// @require            none

// @match              *://*/*

// ==/UserScript==

(function () {
  'use strict';

  // 隐藏原来的滚动条
  let style = document.createElement('style');
  style.innerHTML = `::-webkit-scrollbar {display: none;}`;
  document.head.appendChild(style);

  // 创建一个悬浮滚动条元素
  let scrollbar = document.createElement('div');
  scrollbar.style.position = 'fixed';
  scrollbar.style.top = '0';
  scrollbar.style.right = '0';
  scrollbar.style.width = '4px';
  scrollbar.style.height = '100%';
  scrollbar.style.background = 'linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet)';
  scrollbar.style.zIndex = '9999';

  // 将悬浮滚动条添加到页面中
  document.body.appendChild(scrollbar);

  // 监听页面滚动事件，更新悬浮滚动条的位置
  window.addEventListener('scroll', function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    let scrollPercent = scrollTop / (scrollHeight - clientHeight);
    scrollbar.style.top = (100 * scrollPercent) + '%';
  });

})();
