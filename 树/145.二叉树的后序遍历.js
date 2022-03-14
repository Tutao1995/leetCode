/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let ret = [];
    // const loop = (root) => {
    //     if (root === null) return;
    //     loop(root.left);
    //     loop(root.right);
    //     ret.push(root.val);
    // };
    // loop(root);
    let cache = [root];
    while (cache.length) {
        const top = cache.pop();
        if (top) {
            if (top.left) {
                cache.push(top.left);
            }
            if (top.right) {
                cache.push(top.right);
            }
            ret.unshift(top.val);
        }
    }
    return ret;
};
// @lc code=end
