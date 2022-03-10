/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    // 最终返回结果
    let total = Number.MIN_SAFE_INTEGER;
    const dfs = (root) => {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);
        // 赶回的最大值可能是某一个子树，因此需要求和这个子树的值。
        const outValue = root.val + left + right;
        total = Math.max(total, outValue);
        // 内部现需要返回给外面的最大值，需要求和的内容只能是某个一个子树的左树或者右树。（路劲不能重复）
        const innerValue = root.val + Math.max(left, right, 0);
        // 如果对外提供的路径和为负，直接返回0。否则正常返回
        return innerValue < 0 ? 0 : innerValue;
    };
    dfs(root);
    return total;
};
// @lc code=end
