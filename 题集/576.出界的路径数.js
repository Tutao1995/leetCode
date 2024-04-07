/*
 * @lc app=leetcode.cn id=576 lang=javascript
 *
 * [576] 出界的路径数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
    let result = 0
    function loop (moveCount) {
        if (moveCount <= maxMove && (startRow > m || startRow < 1 || startColumn > n || startColumn < 1)) {
            result++;
            return
        }
        moveCount++
        if (startRow < m)


    }
};
// @lc code=end

