/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

//  ({[[]]})
var isValid = function (s) {
    let len = s.length;
    if (len % 2) return false;
    let left = ["(", "[", "{"];
    let map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    let stack = [];
    for (let i = 0; i < len; i++) {
        const item = s[i];
        if (left.includes(item)) {
            stack.push(item);
        } else {
            let p = stack.pop();
            if (p !== map[item]) {
                return false;
            }
        }
    }
    return !stack.length;
};
// @lc code=end
