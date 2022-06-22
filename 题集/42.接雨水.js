/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let start = 0;
    let end = height.length;
    let result = 0;
    while (start < end) {
        console.log(start, "start");
        let i = start + 1;
        while (i < end) {
            console.log(
                i,
                start,
                height[i],
                height[start],
                height[i] >= height[start],
                i - start
            );
            if (height[i] >= height[start] && i - start === 1) {
                start = i - 1;
                console.log("提换", start);
                break;
            }
            if (height[i] >= height[start] && i - start > 1) {
                console.log("求和", start, i);
                let area = 0;
                let temp = i - 1;
                while (temp >= start) {
                    area += height[temp];
                    temp--;
                }
                result += (i - start) * height[start] - area;
                console.log("求和", result, area);
                start = i - 1;
                break;
            }
            i++;
        }
        start++;
    }
    return result;

    for(let key in data) {
        const sendData = data[key];
        postMessage(data)
    }


};
// @lc code=end
