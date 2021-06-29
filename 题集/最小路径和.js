/* 
    给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
/* 
    主要是找到 方程  dp[i][j] = Math.min(dp[i][j-1],dp[i-1][j]) + grid[i][j]

    动态规划问题  递归

    记录到达每一格时最小的路径
    到记录到 dp[m][n]时就是需要的结果
    到达每一格的路径和可能有两种
        从上面单元格进入则：dp[i][j] = dp[i][j-1]+grid[i][j]
        从上面单元格进入则：dp[i][j] = dp[i-1][j]+grid[i][j]
    索引存在-1 则需要注意边界问题：
        grid 长 0，返回 0
        dp[0][0] = grid[0][0]
        遍历从 i=1,j=1 开始
        dp[i][0],dp[0][j],使用当前行或者列累加做默认值

*/
var minPathSum = function (grid) {
    let m = grid.length,
        n = grid[0] ? grid[0].length : 0;
    if (m === 0 || n === 0) return 0;
    let dp = Array.from({ length: m }, () =>
        new Array(n).fill(Number.MAX_VALUE)
    );

    dp[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let minItem = Math.min(dp[i][j - 1], dp[i - 1][j]);
            dp[i][j] = minItem + grid[i][j];
        }
    }

    return dp[m - 1][n - 1];
};

//优化
var minPathSumBetter = function (grid) {
    let m = grid.length,
        n = grid[0] ? grid[0].length : 0;
    if (m === 0 || n === 0) return 0;

    let dp = new Array(n).fill(0);

    dp[0] = grid[0][0];

    // 补齐首列路径和
    for (let i = 1; i < n; i++) {
        dp[i] = dp[i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        // 开始每列循环时限初始化本列起点路径和，到达本列前的路径和
        dp[0] = dp[0] + grid[i][0];
        for (let j = 1; j < n; j++) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
        }
    }
    return dp[n - 1];
};

//递归
/* 
计算路径的逻辑还是和上面一样，入口+当前单元格中的值
递归参数，行列（i,j）
递归边界条件：
    i 和 j 任意指针越界说明指针并为指向单元格丢弃该值，使用最大值在取 min 时会自行丢弃
    dp 存储过此单元格路径和直接返回存储在 dp 中的值

*/
var minDigui = (grid) => {
    let m = grid.length,
        n = grid[0] ? grid[0].length : 0;
    if (m === 0 || n === 0) return 0;

    let dp = Array.from({ length: m }, () => Array(n).fill(0));

    // 起点
    dp[0][0] = grid[0][0];

    function get_sum(i, j) {
        if (i < 0 || j < 0) return Number.MAX_VALUE;
        if (dp[i][j]) return dp[i][j];
        let itemMin =
            grid[i][j] + Math.min(get_sum(i - 1, j), get_sum(i, j - 1));
        dp[i][j] = itemMin;
        return itemMin;
    }

    return get_sum(m - 1, n - 1);
};

let arr = [
    [1, 3, 4],
    [1, 3, 5],
    [1, 3, 5],
];

console.log(minPathSum(arr));
