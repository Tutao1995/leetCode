/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    const loop = (root, targetSum) => {
        if (root === null) return 0;
        let sum = 0;
        console.log(root.val, targetSum);
        if (root.val === targetSum) {
            sum++;
        }
        loop(root.left, targetSum - root.val);
        loop(root.right, targetSum - root.val);
        return sum;
    };
    let sum = loop(root, targetSum);
    sum += loop(root.left, targetSum);
    sum += loop(root.right, targetSum);
    return sum;
};
// @lc code=end
