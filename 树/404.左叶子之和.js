/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    const loop = (root) => {
        console.log(root, "root");
        if (root === null) return;
        if (
            root.left !== null &&
            root.left.left === null &&
            root.left.right === null
        ) {
            sum += root.left.val;
        }
        loop(root.left);
        loop(root.right);
    };
    loop(root);
    return sum;
};
// @lc code=end
