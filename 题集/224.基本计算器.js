/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    // 匹配括号  
    // 入栈  匹配到右括号 出栈  计算， 再入栈继续
    const stack = [];
    let start = 0;
    let cal = [];
    let bracketIndex = []
    let end = s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            bracketIndex.push(start)
        }
        if (s[start] === ')') {
            stack.splice(bracketIndex[bracketIndex.length - 1], 1, stack)
        }
        stack.push(s[start])
    }

    function calc (list) {
        let realList = list.slice(1, list.length);
        let result = +realList[0];
        let i = 2
        while (i < realList.length) {
            let item = realList[i - 1] + realList[i]
            result += +item
            i = i + 2
        }
        return result
    }
};
// @lc code=end

