/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 
    思路：对于一个节点来说 存在两种情况 选择与不选择
    对于选择来说  那么其子节点就不能选择
    对于不选择来说，那么其子节点可以选择也可以不选择。
    该节点可以对外输出的值就是上面两种情况中的最大值。
*/
const map = new Map(); // 优化，避免重复遍历
var rob = function (root) {
    const loop = (root) => {
        if (root === null) return [0, 0]; // [不抢劫， 抢劫]
        if (map.get(root)) return map.get(root); // 优化，避免重复遍历
        let lSubValue = loop(root.left);
        let rSubValue = loop(root.right);
        // 抢劫 那么子节点的就不能抢
        let robValue = root.val + lSubValue[0] + rSubValue[0];
        // 不抢劫 那么子节点可以抢劫也可以不抢劫 值应该为两者中最大值。
        let notRobValue =
            Math.max(lSubValue[0], lSubValue[1]) +
            Math.max(rSubValue[0], rSubValue[1]);
        const result = [notRobValue, robValue];
        map.set(root, result); // 优化，避免重复遍历
        return result;
    };
    const result = loop(root);
    return Math.max(result[0], result[1]);
};
// @lc code=end
