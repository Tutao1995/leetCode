/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    // 左右子树都不存在，说明是叶子节点，判断是否符合条件
    if (!root.left && !root.right) return targetSum === root.val;
    // 到这里就是：节点存在，左右子树存在一个或者都存在，也就是内部节点
    // 遍历左右子树，更新总和为 总和删除当前节点的值
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
};
// @lc code=end
