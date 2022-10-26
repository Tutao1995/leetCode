/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    // base case 如果源字符串比限制长度k还要小，肯定即便s中所有字符都是同一个也不满足条件
    if (s.length < k) return 0;
    // 源字符串中每个字符出现的次数存入map中
    let counter = new Map();
    for (let i = 0; i < s.length; i++) {
        counter.set(s[i], (counter.get(s[i]) || 0) + 1);
    }
    for (let c of counter.keys()) {
        // 字符 c 在 s 中出现的次数少于 k 次，s中所有包含c的子字符串都不能满足
        if (counter.get(c) < k) {
            // 应该在s中所有不包含c的子字符串中查找
            let count = 0;
            for (let t of s.split(c)) {
                count = Math.max(count, longestSubstring(t, k));
            }
            return count;
        }
    }
    return s.length;
};

// @lc code=end

