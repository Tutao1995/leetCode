/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
    const loop = (root) => {
        if (!root) return 0;
        const leftDepth = loop(root.left);
        if (leftDepth === -1) {
            return -1;
        }
        const rightDepth = loop(root.right);
        if (rightDepth === -1) {
            return -1;
        }
        const cut = Math.abs(leftDepth - rightDepth);
        if (cut > 1) {
            return -1;
        } else {
            return Math.max(leftDepth, rightDepth) + 1;
        }
    };
    return loop(root) === -1 ? false : true;
};
// @lc code=end
