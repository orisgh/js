// ==UserScript==

// @name               ab.yt.vd.ads.up.zs.ls.dy
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.yt.vd.ads.up.zs.ls.dy.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.yt.vd.ads.up.zs.ls.dy.user.js
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

// @match              https://www.youtube.com/watch?v=*

// ==/UserScript==

(function () {
    'use strict';

    let blockList = `

oooooooooooooooozszs1111
oooooooooooooooozszs11
萌萌战队
妈咪说MommyTalk
Linvo說宇宙
PanSci 泛科学
oooooooooooooooozszs22
科学认识论
oooooooooooooooozszs33
大刘科普
老房叨叨叨
oooooooooooooooozszs44
oooooooooooooooozszs55
oooooooooooooooozszs走进科学
自说自话的总裁
脑洞乌托邦
oooooooooooooooozszs9999


oooooooooooooooosmsm1111
oooooooooooooooosmsm11
零度解说
科技美学
Mediastorm影视飓风
oooooooooooooooosmsm22
oooooooooooooooosmsm33
硬件茶谈
笔吧评测室
oooooooooooooooosmsm44
oooooooooooooooosmsm55
oooooooooooooooosmsm9999


oooooooooooooooodydy1111
oooooooooooooooodydy11
超英队长
青蛙刀圣1993
oooooooooooooooodydy22
oooooooooooooooodydy33
oooooooooooooooodydy44
oooooooooooooooodydy55
oooooooooooooooodydy9999


oooooooooooooooobili1111
oooooooooooooooobili11
LKs OFFICIAL CHANNEL
oooooooooooooooobili22
oooooooooooooooobili33
oooooooooooooooobili44
oooooooooooooooobili55
oooooooooooooooobili9999


oooooooooooooooolsls1111
oooooooooooooooolsls11
oooooooooooooooolsls22
oooooooooooooooolsls33
oooooooooooooooolsls44
oooooooooooooooolsls55
oooooooooooooooolsls9999


oooooooooooooooowwww1111
oooooooooooooooowwww11
oooooooooooooooowwww22
oooooooooooooooowwww33
oooooooooooooooowwww44
oooooooooooooooowwww55
oooooooooooooooowwww9999


oooooooooooooooohjhj1111
oooooooooooooooohjhj11
oooooooooooooooohjhj22
oooooooooooooooohjhj33
oooooooooooooooohjhj44
oooooooooooooooohjhj55
oooooooooooooooohjhjtk
oooooooooooooooohjhjxx
oooooooooooooooohjhj9999


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

})();
