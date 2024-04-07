/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let ans = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        const current = nums[i];
        // 优化1.  相同的值直接跳过
        if (i > 0 && current === nums[i - 1]) {
            continue
        }

        // 优化2. 如果当前连续的值都比target大，那么直接不比了。
        let temp = current + nums[i + 1] + nums[i + 2];
        if (temp >= target && Math.abs(temp - target) < min) {
            return temp
        }

        // 优化3. 如果当前值与最后两个值之和都比target小，直接进入下一轮
        temp = current + nums[nums.length - 1] + nums[nums.length - 2];
        if (temp <= target && Math.abs(temp - target) < min) {
            min = Math.abs(temp - target)
            ans = temp;
            continue
        }

        let j = i + 1;
        let len = nums.length - 1;
        while (j < len) {
            const sum = current + nums[j] + nums[len];
            if (sum === target) return sum;
            if (Math.abs(sum - target) < min) {
                min = Math.abs(sum - target);
                ans = sum
            }
            if (sum > target) {
                len--;
            }
            else {
                j++;
            }
        }
    }

    return ans
};
// @lc code=end

