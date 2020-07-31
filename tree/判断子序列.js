/* 
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

示例 1:
s = "abc", t = "ahbgdc"

返回 true.

示例 2:
s = "axc", t = "ahbgdc"

返回 false.


*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//双指针
/* 
  思路：
    两个指针扫长串和短串，如果指向的字符相同，两个指针都移动，如果不相同，短串的指针不动，长串的指针移动，继续考察
    如果短串走完了，说明短串中的字符在长串中都有匹配
    否则，短串没有走完，长串走完了，说明长串考察完了也没能找齐短串的所有字符
 */
var isSubsequence = function (s, t) {
    let sLen = s.length,
        tLen = t.length,
        subIndex = 0,
        pIndex = 0;
    if (!sLen) return true;
    while (pIdex < tLen) {
        if (s[subIndex] === t[pIndex]) {
            subIndex++;
            if (subIndex > tLen - 1) {
                return true;
            }
        }
        pIdex++;
    }
    return false;
};

//正则    这个是真的牛
var regIsSubsequence = function (s, t) {
    return new RegExp([...s].join("[a-z]*")).test(t);
};

//栈
var stackIsSubsequence = function (s, t) {
    const sStack = s.split("");
    const tStack = t.split("");
    for (let i = 0; i < t.length; i++) {
        if (tStack[i] === sStack[0]) {
            sStack.shift();
        }
        if (sStack.length === 0) {
            return true;
        }
    }
    if (sStack.length === 0) {
        return true;
    }
    return false;
};

// self
var selfIsSubsequence = function (s, t) {
    let sLen = s.length,
        index = 0,
        str = t.slice(0);
    for (let i = 0; i < s.length; i++) {
        let _index = str.indexOf(s[i]);
        if (_index > -1) {
            str = str.slice(_index + 1); //顺序
            index++;
        } else {
        }
    }
    return index >= sLen;
};

selfIsSubsequence("bb", "ahbgdc");

export default {
    init: function () {
        const AK = "vcM72RPfaB2Wqcqq7QBli94s4GUyOiWY";
        const BMapURL =
            "https://api.map.baidu.com/api?v=3.0&ak=" +
            AK +
            "&s=1&callback=onBMapCallback";
        return new Promise((resolve, reject) => {
            // 如果已加载直接返回
            // if (typeof BMap !== 'undefined') {
            // resolve(BMap)
            // return true
            // }
            // 百度地图异步加载回调处理
            window.onBMapCallback = function () {
                console.log("百度地图脚本初始化成功...");
                // eslint-disable-next-line
                resolve(BMap);
            };

            // 插入script脚本
            let scriptNode = document.createElement("script");
            scriptNode.setAttribute("type", "text/javascript");
            scriptNode.setAttribute("src", BMapURL);
            document.body.appendChild(scriptNode);
        });
    },
};
