// ==UserScript==

// @name               a.title.ss.%s
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.title.ss.%s.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.title.ss.%s.user.js
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

// @match              https://search.bilibili.com/*
// @match              https://www.youtube.com/results?search_query=*
// @match              https://www.google.com/search?q=*
// @match              https://www.wuzhuiso.com/s?q=*
// @match              https://thepiratebay.org/search.php?q=*
// @match              https://cn.pornhub.com/video/search?search=*
// @match              https://www.pornhub.com/video/search?search=*
// @match              https://www.xvideos.com/?k=*
// @match              https://www.youporn.com/search/?query=*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

    // 定义一个字符串，包含常见的搜索参数名
    const searchParams = `
keyword
search_query
search
query
q
k
tab
`.trim().split('\n');

    // 获取当前页面的URL对象
    const currentUrl = new URL(window.location.href);

    // 定义一个函数，从URL中提取搜索词
    function getSearchTerm(url) {
        for (let param of searchParams) {
            if (url.searchParams.has(param)) {
                return url.searchParams.get(param);
            }
        }
        return "";
    }

    // 定义一个函数，从URL中提取域名
    function getDomainName(url) {
        return url.hostname;
    }

    // 调用函数，获取搜索词和域名
    const term = getSearchTerm(currentUrl);
    const domain = getDomainName(currentUrl);

    if (term) {
        document.title = "s " + term + " ssss " + domain;
    } else {
        console.log("error");
    }

}

aaaaaaaa();

setTimeout(aaaaaaaa, 4000);
setTimeout(aaaaaaaa, 8000);

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        aaaaaaaa();
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
