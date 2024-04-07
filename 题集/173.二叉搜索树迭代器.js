/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function (root) {
    this.currentIndex = 0;
    this.list = []
    this.inOrderTree(root, this.list);
    console.log(this.list)
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.list[this.currentIndex++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    console.log(this.currentIndex)
    return this.currentIndex !== this.list.length
};

BSTIterator.prototype.inOrderTree = function (root, list) {
    if (root) {
        this.inOrderTree(root.left, list)
        list.push(root.val);
        this.inOrderTree(root.right, list)
    }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

