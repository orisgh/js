// ==UserScript==

// @name               ab.bili.vd.ads.up.xw
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.ads.up.xw.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/ab.bili.vd.ads.up.xw.user.js
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

// @match              https://www.bilibili.com/video/BV*

// ==/UserScript==

(function () {
    'use strict';

    let blockList = `

ooooooooooooooooxwxw11
波士顿圆脸

ooooooooooooooooxwxw22
凸山高县凸

ooooooooooooooooxwxw33
ooooooooooooooooxwxw44
CGTN
金灿荣教授
重庆广电全媒体
视界中国CM
小雨观察员
号外视点
神鸟快评

ooooooooooooooooxwxw55
范勇鹏
这里是鄂州

ooooooooooooooooxwxw几十秒11
新华社快看
新华网
中国新闻周刊
凤凰网
凤凰卫视

ooooooooooooooooxwxw几十秒22
看看新闻Knews
财联社CC新闻
财经杂志
第一财经
中新视频
红星视频
闪电新闻
大象视频

ooooooooooooooooxwxw几十秒报纸电视台
中国日报
新民晚报
参考消息
科技日报
中国日报网
环球时报
环球网
人民网
北京日报
国防时报TV

ooooooooooooooooxwxw几十秒gf
电网头条
复兴路上

ooooooooooooooooxwxw几十秒44
网易新闻
腾讯新闻
正午30分
直播日照
燃新闻
新闻启示录
津云
海博TV
海客新闻
海客新闻
四川观察
青蜂侠-Bee
首阅视频
虎符视频
BRTV新闻

ooooooooooooooooxwxwjs
中国战略支援
人民海军
人民空军
东部战区
中部号角

ooooooooooooooooxwxwjsyxh
科普军武
大国-锐器

ooooooooooooooooxwxwtw
苏恒台湾
海峡新干线
海峡导报社
台海网
中国台湾网
东南军情
黄智贤工作室

ooooooooooooooooxwxwtk人名33
邱震海
罗富强观察室

ooooooooooooooooxwxwtk人名44
李肃论道
评论员杜平
宋忠平
校尉说
滕建群
刘晓非观察室
飞评观察室
田柳观察
静知时事
田柳Talk
豫说talk

ooooooooooooooooxwxw融媒体
大国锐评
大风世界
NAAS海陆空天惯性世界
龙视要闻
龙视国际
即刻国际
剁椒国际
剁椒观察
灯笼国际
988国际观察
天天军事观察
北方国际观察
988防务观察
南国资讯
成都电视发展有限公司
深圳卫视直新闻
神鸟知讯国际纵横
神鸟知讯防务
神鸟知讯国际
小椰子专栏

ooooooooooooooooxwxw99

`.trim().split('\n');

    function aaaaaaaa() {
        let videoCards = document.querySelectorAll('.video-page-card-small');
        videoCards.forEach(videoCard => {
            let name = videoCard.querySelector('.name');
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
