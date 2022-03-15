/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;
    if (root.val === p.val || root.val === q.val) return root;
    const lNode = lowestCommonAncestor(root.left, p, q);
    const rNode = lowestCommonAncestor(root.right, p, q);
    if (lNode !== null && rNode !== null) { // 左右子树都有  返回root
        return root;
    } else if (lNode === null) { // 在右子树  直接返回右子树
        return rNode;
    } else {    //在左子树  直接返回左子树
        return lNode;
    }
};
// @lc code=end
