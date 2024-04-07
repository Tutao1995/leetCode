/*
 * @lc app=leetcode.cn id=413 lang=javascript
 *
 * [413] 等差数列划分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (list) {
    if (list.length < 3) return 0;
    let result = 0
    for (let i = 0; i < list.length - 2; i++) {
        let startValue = cutValue = list[i + 1] - list[i];
        for (let j = i + 1; j < list.length; j++) {
            let tempValue = list[j] - list[j - 1];
            if ((j - i >= 2)) {
                if (tempValue === cutValue && startValue === tempValue) {
                    result++
                } else {
                    break
                }
            }
            cutValue = tempValue
        }
    }
    console.log(result, "result")
    return result



};
// @lc code=end

