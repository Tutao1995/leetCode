/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    const ret = [];
    const loop = (root, level) => {
        if (!root) return;
        if (!ret[level]) {
            ret[level] = [].concat(root.val);
        } else {
            level % 2
                ? ret[level].unshift(root.val)
                : ret[level].push(root.val);
        }
        loop(root.left, level + 1);
        loop(root.right, level + 1);
    };
    loop(root, 0);
    return ret;
};
// @lc code=end
