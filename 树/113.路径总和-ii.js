/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    const res = [];

    const loop = (root, targetSum, path) => {
        if (!root) return;
        if (!root.left && !root.right && root.val === targetSum) {
            res.push([...path, root.val]);
        }
        if (root.left) {
            path.push(root.val);
            loop(root.left, targetSum - root.val, path.slice(0));
            path.pop();
        }
        if (root.right) {
            path.push(root.val);
            loop(root.right, targetSum - root.val, path.slice(0));
            path.pop();
        }
    };
    loop(root, targetSum, []);
    return res;
};
// @lc code=end
