/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let result = [];
    const loop = (root, prev) => {
        if (root === null) {
            return;
        }
        if (prev !== "") {
            prev = prev + "->" + root.val;
        } else {
            prev = prev + root.val;
        }
        if (root.left === null && root.right === null) {
            result.push(prev);
            return;
        }
        root.left !== null && loop(root.left, prev);
        root.right !== null && loop(root.right, prev);
    };
    loop(root, "");
    return result;
};
// @lc code=end
