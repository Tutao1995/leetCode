/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
    let mapObj = {}
    loop(root);
    let ret = 0;
    let result = []
    for (let key in mapObj) {
        const item = mapObj[key];
        if (item > ret) {
            result = []
            result.push(key);
            ret = item
        } else if (item === ret) {
            result.push(key);
            ret = item
        }
    }
    return result
    function loop(root) {
        if (!root) return;
        if (!mapObj[root.val]) {
            mapObj[root.val] = 0
        }
        mapObj[root.val] += 1;
        loop(root.left)
        loop(root.right)
    }
};
// @lc code=end

