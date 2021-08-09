/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const loop = (postorder, inorder) => {
        if (!postorder.length || !inorder.length) return null;
        if (postorder.length === 1 || inorder.length === 1)
            return new TreeNode(postorder[0], null, null);
        const rootVal = postorder[postorder.length - 1];
        const index = inorder.findIndex((item) => item === rootVal);
        const inLeftList = inorder.slice(0, index);
        const inRightList = inorder.slice(index + 1);
        const postLeftList = postorder.slice(0, inLeftList.length);
        const postRightList = postorder.slice(inLeftList.length, -1);
        const treeNode = new TreeNode(
            rootVal,
            loop(postLeftList, inLeftList),
            loop(postRightList, inRightList)
        );
        return treeNode;
    };
    return loop(postorder, inorder);
};
// @lc code=end
