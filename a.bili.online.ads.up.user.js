// ==UserScript==

// @name               a.bili.online.ads.up
// @downloadURL        https://github.com/orisgh/nox.user.js/raw/main/a.bili.online.ads.up.user.js
// @updateURL          https://github.com/orisgh/nox.user.js/raw/main/a.bili.online.ads.up.user.js
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

// @match              https://www.bilibili.com/video/online.html

// ==/UserScript==

(function () {
	'use strict';

	let blockList = `

oooooooooooooooo1111

oooooooooooooooo公开课
一数
宋浩老师官方
一化儿
刘文超Vin
CocoPolaris
黑马程序员
Python_子木
威猛公考
江协科技

oooooooooooooooo游戏
是大腿
STN工作室
野水游言
原神
你的影月月
莴苣某人
明日方舟
萧然Q
魔法Zc目录
苏烟Suyn
孜然酱酱酱
布锅锅
崩坏星穹铁道
分析师蓝宝石
老实憨厚的笑笑
烂活电竞
CSGO-QUQU
游民星空官方
怕上火暴王老菊
尕丶天堂

oooooooooooooooo生活区
雨哥到处跑
某幻君
中国BOY超级大猩猩
小潮院长
高斯Goh
TF家族
逗比的雀巢

oooooooooooooooo汽车
懂车帝原创
是语汐

oooooooooooooooo娱乐
泥萌哪噶

oooooooooooooooo阴谋论
啊粥粥啊粥

oooooooooooooooo哔哩官方
哔哩哔哩国创
哔哩哔哩英雄联盟赛事
哔哩哔哩番剧
哔哩哔哩电影

oooooooooooooooo9999

`.trim().split('\n');

	function aaaaaaaa() {
		let eboxes = document.querySelectorAll('.ebox');
		eboxes.forEach(ebox => {
			let author = ebox.querySelector('.author');
			if (blockList.includes(author.textContent)) {
				ebox.style.display = 'none';
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
