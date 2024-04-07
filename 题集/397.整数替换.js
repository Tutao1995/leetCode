/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    const memo = new Map()
    const loop = (val) => {
        if (val === 1) return 0
        if (!memo.has(val)) {
            if (val % 2) {
                memo.set(val, 1 + Math.min(loop(val - 1), loop(val + 1)))
            } else {
                memo.set(val, 1 + loop(val / 2))
            }
        }
        return memo.get(val)
    }

    return loop(n)
};
// @lc code=end

