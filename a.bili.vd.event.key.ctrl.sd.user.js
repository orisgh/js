// ==UserScript==

// @name               a.bili.vd.event.key.ctrl.sd
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.vd.event.key.ctrl.sd.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.vd.event.key.ctrl.sd.user.js
// @run-at             document-idle
// @version            2023.1107

// @description        w
// @author             nox
// @license            MIT
// @namespace          https://github.com/orisgh
// @copyright          2023, nox (https://github.com/orisgh)
// @homepageURL        https://github.com/orisgh/nox.user.script

// @noframes
// @grant              none
// @connect            none
// @require            none

// @match              https://www.bilibili.com/video/BV*

// ==/UserScript==

let lastCtrlPressTime = 0;

document.addEventListener('keydown', function(event) {
    if (event.key === 'Control') {
        lastCtrlPressTime = new Date().getTime();
    } else if (event.key === 'd') {
        const currentTime = new Date().getTime();
        if (currentTime - lastCtrlPressTime <= 2000) {
            const element = document.querySelector('.bpx-player-ctrl-btn.bpx-player-ctrl-web');
            if (element) {
                element.click();
            } else {
                console.log('元素未找到');
            }
        }
    } else if (event.key === 's') {
        const currentTime = new Date().getTime();
        if (currentTime - lastCtrlPressTime <= 2000) {
            const element = document.querySelector('.bpx-player-ctrl-setting-checkbox.bpx-player-ctrl-setting-lightoff .bui-checkbox-input');
            if (element) {
                element.click();
            } else {
                console.log('元素未找到');
            }
        }
    } else if (new Date().getTime() - lastCtrlPressTime === 2001) {
        return;
    }
});
