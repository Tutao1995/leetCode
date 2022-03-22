/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // let result = 0;
    // for (let i = 0; i < height.length - 1; i++) {
    //     for (let j = height.length - 1; j > i; j--) {
    //         const h = Math.min(height[i], height[j]);
    //         const w = j - i;
    //         console.log(h, w);
    //         result = Math.max(result, h * w);
    //     }
    // }
    // return result;
    let result = 0;
    let len = height.length;
    let left = 0;
    let right = len - 1;
    while (left < right) {
        let h = Math.min(height[left], height[right]);
        let w = right - left;
        result = Math.max(result, h * w);
        height[left] > height[right] ? right-- : left++;
    }
    return result;
};
// @lc code=end
