/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
    const loop = (root) => {
        if (!root) return 0;
        if (!root.left) {
            return loop(root.right) + 1;
        }
        if (!root.right) {
            return loop(root.left) + 1;
        }
        return Math.min(loop(root.left), loop(root.right)) + 1;
    };
    return loop(root);
};
// @lc code=end
