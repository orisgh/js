// ==UserScript==

// @name               a.ads.ad.site.abcdefg
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.ads.ad.site.abcdefg.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.ads.ad.site.abcdefg.user.js
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

// @match              https://a.com
// @match              https://b.com
// @match              https://c.com
// @match              https://d.com
// @match              https://e.com

// ==/UserScript==

(function () {
    'use strict';

    const blockLists = {


        'a.com': `
#oooooooo
.oooooooo
`,


        'b.com': `
#oooooooo
.oooooooo
`,


        'c.com': `
#oooooooo
.oooooooo
`,


        'd.com': `
#oooooooo
.oooooooo
`,


        'e.com': `
#oooooooo
.oooooooo
`,


        'f.com': `
#oooooooo
.oooooooo
`,


        'g.com': `
#oooooooo
.oooooooo
`,


        'z.com': `
#oooooooo
.oooooooo
`


    };

    function aaaaaaaa() {

        // 获取当前网站的域名
        const domain = window.location.hostname;
        // 获取当前网站对应的屏蔽列表
        const blockList = (blockLists[domain] || '').trim().split('\n');
        // 遍历屏蔽列表中的所有选择器
        for (const selector of blockList) {
            // 获取网页中与选择器匹配的所有元素
            const elements = document.querySelectorAll(selector);
            // 遍历所有元素
            for (const element of elements) {
                // 隐藏元素
                element.style.setProperty('display', 'none', 'important');
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

    let ctrlDown = false;
    let otherKeyDown = false;
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Control') {
            ctrlDown = true;
        } else {
            otherKeyDown = true;
        }
    });
    document.addEventListener('keyup', function (event) {
        if (event.key === 'Control') {
            if (ctrlDown && !otherKeyDown) {
                aaaaaaaa();
            }
            ctrlDown = false;
            otherKeyDown = false;
        } else {
            otherKeyDown = false;
        }
    });

})();
