/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    const len = nums.length;
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        let start = i + 1;
        let end = len - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while (start < end) {
            if (nums[i] + nums[start] + nums[end] < 0) {
                start++; // 左指针右移
                // 如果遇到重复的数字，则跳过
                while (start < end && nums[start] === nums[start - 1]) {
                    start++; // 左指针右移
                }
            } else if (nums[i] + nums[start] + nums[end] > 0) {
                end--; // 右指针左移
                // 如果遇到重复的数字，则跳过
                while (start < end && nums[end] === nums[end + 1]) {
                    end--; // 右指针左移
                }
            } else {
                // 满足结果 push结果。
                result.push([nums[i], nums[start], nums[end]]);
                start++; // 左指针右移
                end--; // 右指针左移
                // 如果遇到重复的数字，则跳过
                while (start < end && nums[start] === nums[start - 1]) {
                    start++; // 左指针右移
                }
                // 如果遇到重复的数字，则跳过
                while (start < end && nums[end] === nums[end + 1]) {
                    end--; // 右指针左移
                }
            }
        }
    }
    return result;
};
// @lc code=end
