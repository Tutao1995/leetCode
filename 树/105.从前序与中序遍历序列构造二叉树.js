/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const loop = (preorder, inorder) => {
        if (!preorder.length || !inorder.length) return null;
        if (preorder.length === 1 || inorder.length === 1)
            return new TreeNode(preorder[0], null, null);
        const rootVal = preorder[0];
        const index = inorder.findIndex((item) => item === rootVal);
        const inLeftList = inorder.slice(0, index);
        const inRightList = inorder.slice(index + 1);
        const preLeftList = preorder.slice(1, inLeftList.length + 1);
        const preRightList = preorder.slice(inLeftList.length + 1);
        const treeNode = new TreeNode(
            rootVal,
            loop(preLeftList, inLeftList),
            loop(preRightList, inRightList)
        );
        return treeNode;
    };
    return loop(preorder, inorder);
};
// @lc code=end
