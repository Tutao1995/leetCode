/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
    const ret = [];
    const result = [];
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
    for (let i = 0; i < ret.length; i++) {
        result.push(ret[i][ret[i].length - 1]);
    }
    return result;
};
// @lc code=end
