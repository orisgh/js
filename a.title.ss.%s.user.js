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
// @match              https://cn.pornhub.com/video/search?search=*
// @match              https://www.pornhub.com/video/search?search=*
// @match              https://www.youporn.com/search/?query=*
// @match              https://www.google.com/search?q=*
// @match              https://www.wuzhuiso.com/s?q=*
// @match              https://thepiratebay.org/search.php?q=*
// @match              https://www.xvideos.com/?k=*
// @match              w
// @match              w
// @match              w
// @match              w
// @match              w

// ==/UserScript==

function aaaaaaaa() {

    const searchParams = `
keyword
search_query
search
query
q
k
tab
`.trim().split('\n');

    const currentUrl = new URL(window.location.href);
    function getSearchTerm(url) {
        for (let param of searchParams) {
            if (url.searchParams.has(param)) {
                return url.searchParams.get(param);
            }
        }
        return "";
    }
    function getDomainName(url) {
        return url.hostname;
    }
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
        setTimeout(aaaaaaaa, 1000);
    }
});

document.addEventListener('keydown', function(event) {
    if (event.altKey) {
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
