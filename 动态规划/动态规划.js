/*
动态规划（Dynamic Programming）
1. 概念： 动态规划在寻找有很多重叠子问题的情况的最佳解时有效。它将问题重新组合成子问题，为了避免多次解决这些子问题，它们的结果都逐渐被计算并被储存，从简单的问题直到整个问题都被解决。因此，动态规划储存递归时的结果，因而不会在解决同样的问题时花费时间。
2. 应用： 动态规划只能应用于有最佳子结构的问题。最佳子结构的意思是局部最佳解能决定全域最佳解（对有些问题这个要求并不能完全满足，故有时需要引入一定的近似）。简单地说，问题能够分解成子问题来解决。
3. 总结：
    将一个大的问题拆分成一个个子问题，我们把它称之为子结构。
    每个最优解，也就是最优值均由[这些小规模子问题]推到而来。
    更重要的就是利用历史记录，来避免我们重复的计算。
4. 解题：
    a.状态定义：
        1).需要用数组来保存之前的计算结果，即dp数组
        2).dp数组含义一定要明确，
    b.列出状态转移方程：
        1).通俗来讲就是找出数组之间的关系式，
        2).通常情况而言，dp[i]个状态的转移方程，跟dp[i-1]和dp[i-2]存在着某种关系
    c.初始化状态：
        1).我们会发现，dp数组的第n项结果，是由状态状态转移方程求解而言的，所以我们需要的n-1，n-2，n-3的值
        2).这个时候，我们就需要初始化dp数组的值，
推荐：https://zhuanlan.zhihu.com/p/93857890
分类：
    a.背包Dp   推荐： https://zhuanlan.zhihu.com/p/139368825
    b.线性Dp
    c.区间Dp
    d.树行Dp
    e.数位Dp
*/

// 做题
/*
1. 爬楼梯
连接： https://leetcode-cn.com/problems/climbing-stairs/
描述：
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

实例：
1.
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。

1.  1 阶 + 1 阶
2.  2 阶

2.
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。

1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶

思路：
1.状态定义
dp[i] 表示到第i阶的方案数

2.确定状态转移方程
dp[n] = dp[n - 2] + 2 || dp[n - 1] + 1
因此 dp[n] = dp[n - 1]  +  p[n - 1]

3.初始状态，dp数组
dp[1] = 1  dp[2] = 2
*/

const climStairs = (n) => {
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
/*
零钱兑换
连接： https://leetcode-cn.com/problems/coin-change/
描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

实例：
1.
输入: coins = [1, 2, 5], amount = 11
输出: 3
解释: 11 = 5 + 5 + 1

2.
输入: coins = [2], amount = 3
输出: -1

思路：

*/
const coinChange = (coins, amount) => {};

/*
2. 打家劫舍
连接： https://leetcode-cn.com/problems/house-robber-ii/
描述：
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。


实例：
1.
输入: [2,3,2]
输出: 3
解释: 你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

2.
输入: [1,2,3,1]
输出: 4
解释: 你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。

思路：
1.状态定义
这里就利用二维状态,既然可以选择偷或者是不偷
dp[i][0] 表示不偷当前第i个房间,获取最高金币数
dp[i][1] 表示的是偷第i房间,获取最高金币数


2.确定状态转移方程
第i个房间偷的话,dp[i][1] = nums[i] + dp[i-1][0]
第i个房间不偷的话, dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1])


3.初始状态，dp数组
dp[0][0] = 0
dp[0][1] = nums[0]

*/

const robber = (numbers) => {
    let len = numbers.length;
    if (!len) return 0;
    if (len === 1) return numbers[0];
    function handel(numbers) {
        let len = numbers.length;
        if (!len) return 0;
        if (len === 1) return numbers[0];
        let dp = Array.from(new Array(len), () => new Array(len).fill(0));
        dp[0][0] = 0;
        dp[0][1] = numbers[0];
        for (let i = 1; i < len; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
            dp[i][1] = dp[i - 1][0] + numbers[i];
        }
        return Math.max(dp[len - 1][0], dp[len - 1][1]);
    }
    let ret0 = handel(numbers.slice(1));
    let ret1 = handel(numbers.slice(0, len - 1));
    return Math.max(ret0, ret1);
};

/*
3. 买卖股票的最佳时机
连接： https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
描述：
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。


实例：
1.
输入: [2,4,1], k = 2
输出: 2
解释: 在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。


2.
输入: [3,2,6,5,0,3], k = 2
输出: 7
解释: 在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
     随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。


思路：
1.状态定义
这里就利用二维状态,既然可以选择买或者是卖
dp[i][j][0] 表示第i天第j次卖  累计最大利润
dp[i][j][1] 表示第i天第j次买  累计最大利润


2.确定状态转移方程
第i天第j次卖的话, dp[i][j][0] = nums[i] + Math.max(dp[i][j][0], dp[i][j][1])
第i天第j次买的话, dp[i][j][1] = Math.max(dp[i-1][0],dp[i-1][1])


3.初始状态，dp数组
dp[0][0] = 0
dp[0][1] = nums[0]

*/

const stock = (numbers, n) => {};
