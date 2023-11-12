// ==UserScript==

// @name               ab.bili.vd.cover
// @downloadURL        https://github.com/orisgh/js/raw/main/ab.bili.vd.cover.user.js
// @updateURL          https://github.com/orisgh/js/raw/main/ab.bili.vd.cover.user.js
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

// ==/UserScript==

(function () {
  'use strict';

  // 获取当前页面的URL
  var url = new URL(window.location.href);

  // 从URL的路径中提取bvid
  var bvid = url.pathname.split('/')[2];

  // 调用Bilibili的API获取视频信息
  fetch('https://api.bilibili.com/x/web-interface/view?bvid=' + bvid)
    .then(response => response.json())
    .then(data => {
      // 从返回的数据中获取pic
      var pic = data.data.pic;

      var btn = document.createElement('button');
      btn.style.width = '24px';
      btn.style.height = '24px';
      btn.style.position = 'absolute';
      btn.style.top = '21px';
      btn.style.left = '104px';
      btn.style.zIndex = '1100';
      btn.style.backgroundImage = 'url(https://i0.hdslb.com/bfs/emote/3087d273a78ccaff4bb1e9972e2ba2a7583c9f11.png@48w_48h.webp)';
      btn.style.backgroundColor = '#0000';
      btn.style.backgroundSize = 'cover';
      btn.style.border = 'none';

      var img = document.createElement('img');
      img.style.display = 'none';
      img.style.position = 'absolute';
      img.style.top = (parseInt(btn.style.top) + parseInt(btn.style.height) + 16) + 'px';
      img.style.left = 0;
      img.style.maxWidth = '100%';
      img.style.zIndex = '1100';

      // 设置图片的src为pic
      img.src = pic;

      btn.addEventListener('mouseover', function () {
        img.style.display = 'block';
      });
      btn.addEventListener('mouseout', function () {
        img.style.display = 'none';
      });
      btn.addEventListener('click', function () {
        window.open(img.src);
      });

      document.body.appendChild(btn);
      document.body.appendChild(img);

    })
    .catch(error => console.error('Error:', error));

})();
