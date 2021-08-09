/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
    const ret = [];
    const loop = (root, level) => {
        if (!root) return;
        if (!ret[level]) {
            ret[level] = [].concat(root.val);
        } else {
            ret[level] = ret[level].concat(root.val);
        }

        loop(root.left, level + 1);
        loop(root.right, level + 1);
    };
    loop(root, 0);
    return ret.reverse();
};
// @lc code=end
