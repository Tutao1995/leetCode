/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = function (root) {
    let max,
        min,
        min2,
        nums = [];
    const inOrder = (root) => {
        if (root === null) {
            return;
        }
        inOrder(root.left, nums);
        if (!min && max && nums.length && nums[nums.length - 1] > root.val) {
            min = root.val;
        }
        if (!max && nums.length && nums[nums.length - 1] > root.val) {
            max = nums[nums.length - 1];
            min2 = root.val;
        }

        nums.push(root.val);
        inOrder(root.right, nums);
    };
    const inorder2 = (root) => {
        if (root === null) {
            return;
        }
        inorder2(root.left);
        if (root.val === min) {
            root.val = max;
            return;
        }
        if (root.val === max) {
            root.val = min;
        }
        inorder2(root.right);
    };

    inOrder(root);
    if (!min) {
        min = min2;
    }
    inorder2(root);
    return root;
};
// @lc code=end
