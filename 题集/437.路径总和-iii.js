/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
// BFS + DFS
var pathSum = function (root, targetSum) {
    let ret = 0;
    if (root === null) {
        return 0
    }
    let map = new Map();
    let list = [root];
    while (list.length) {
        let current = list.shift();
        if (current) {
            check(current, 0);
            list.push(current.left)
            list.push(current.right)
        }
    }
    return ret


    function check(node, sum) {
        if (!node) return;
        if (node.val === targetSum - sum) ret++
        check(node.left, sum + node.val)
        check(node.right, sum + node.val)
    }
};

// @lc code=end

//     5
// 4       8
//   11 13  4
//  7  2   5  1


const test = {
    val: 5,
    left: {
        val: 4,
        left: null,
        right: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null
        },
        right: {
            val: 4,
            left: {
                val: 5,
                left: null,
                right: null
            },
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    }
}
const test1 = {
    val: 1,
    left: {
        val: 2,
        right: null,
        left: {
            val: 3,
            left: {
                val: 4,
                left: {
                    val: 5,
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        }
    },
    right: null
}


console.log(pathSum(test1, 3))
