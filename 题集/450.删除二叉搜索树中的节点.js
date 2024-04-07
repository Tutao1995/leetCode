/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) return null
    if (root.val === 0 && key === 0) return null
    loop(root, key)
    return root
    function loop(node, key, parent, type) {
        console.log(node, "node");
        console.log(node.left, node.right)
        if (!node) return
        if (node.val === key) {
            // 找到了
            if (node.right) {
                // val 替代为右侧最小
                const minValue = findMin(node.right)
                node.val = minValue
                loop(node.right, minValue, node, 'right')
            }
            else if (node.left) {
                // val 替代为左侧最大
                const maxValue = findMax(node.left)
                node.val = maxValue
                loop(node.left, maxValue, node, 'left')
            } else {
                parent && type && (parent[type] = null)
            }
            return
        } else if(node.val < key) {
            loop(node.right, key, node, 'right')
        } else if(node.val > key) {
            loop(node.left, key, node, 'left')
            
        }
    }
    function findMax(root) {
        if (!root) return 0
        let value
        while (root) {
            console.log(root.val, 'root')
            value = root.val
            root = root.right;
        }
        return value
    }

    function findMin(root) {
        if (!root) return 0
        let value
        while (root) {
            value = root.val
            root = root.left;
        }
        return value
    }
};
// @lc code=end

