/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    const list = [];
    const loop = (root) => {
        if (root) {
            list.push(root);
            if (root.left) {
                loop(root.left);
            }
            if (root.right) {
                loop(root.right);
            }
        }
    };
    loop(root);
    const ret = list[0];
    let cur = null;
    let prev = null;
    for (let i = 1; i < list.length; i++) {
        prev = list[i - 1];
        cur = list[i];
        prev.left = null;
        prev.right = cur;
    }
    return ret;
};
// @lc code=end
