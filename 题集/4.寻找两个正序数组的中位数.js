/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const total = [].concat(nums1, nums2).sort((a, b) => a - b);
    return total.length % 2
        ? total[Math.floor(total.length / 2)]
        : (total[total.length / 2] + total[total.length / 2 - 1]) / 2;
};
// @lc code=end
