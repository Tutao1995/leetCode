/* 
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false


* Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;

*/
let obj = {
    val: '',
    left: '',
    right: '',
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// 序列化比较   自己的思路
var selfFunc = function(p, q) {
    return JSON.stringify(q) === JSON.stringify(p)
};

// 别人的题解  
/* 
思路：

标签：深度优先遍历

终止条件与返回值：

当两棵树的当前节点都为 null 时返回 true

当其中一个为 null 另一个不为 null 时返回 false

当两个都不为空但是值不相等时，返回 false

执行过程：当满足终止条件时进行返回，不满足时分别判断左子树和右子树是否相同，其中要注意代码中的短路效应

时间复杂度：O(n)O(n)，nn 为树的节点个数

作者：guanpengchn
链接：https://leetcode-cn.com/problems/same-tree/solution/hua-jie-suan-fa-100-xiang-tong-de-shu-by-guanpengc/

*/
const guanpengchn = (p, q) => {
    if(p == null && q == null) 
        return true;
    if(p == null || q == null) 
        return false;
    if(p.val != q.val) 
        return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}


/* 

先序遍历：按照先访问根节点的顺序
中序遍历：按照中间访问根节点的顺序
后序遍历：按照后访问根节点的顺序

*/

const preorder = (root) => {
    const res = [];
    const traversal = (root) => {
        if(root) {
            res.push(root.val)
            traversal(root.left)
            traversal(root.right)
        }
    }
    traversal(root);
    return res;
}

const inorder = (root) => {
    const res = []
    const traversal = (root) => {
        if(root) {
            traversal(root.left)
            res.push(root.val)
            traversal(root.right)
        }
    }
    traversal(root)
    return res
}

const postorder = (root) => {
    const res = []
    const traversal = (root) => {
        if(root) {
            traversal(root.left)
            traversal(root.right)
            res.push(root.val)
        }
    }
    traversal(root)
    return res
}

const isSameTree = (p, q) => {
    const traversal = (root1, root2) => {
        if( (root1 && !root2) || (!root1 && root2)) return false
        if(!root1 && !root2) return true
        if(root1 && root2) {
            return root1.val === root2.val && traversal(root1.left, root2.left) && traversal(root1.right, root2.right)
        }
    }
    return traversal(root1, root2)
}


const reverseTree = (p) => {
    const traversal = (root) => {
        if(!root) return null
        [root.left, root.right] = [traversal(root.right), traversal(root.left)];
        return root
    }
    return traversal(p)
}

//N叉树的后序遍历

const NPostorder = (p) => {
    const res = [];
    const traversal = (root) => {
        if(root) {
            root.children.forEach( child => {
                traversal(child)
            })
            res.push(root.val)
        }
    }
    traversal(p);
    return res;
}

//锯齿遍历 
const zigzagLevelOrder  = (p) => {
    if(!p) return []
    const res = [];
    const traversal = (root, deepth) => {
        if(root){
            if(!res[deepth] === undefined) res[deepth] = []
            res[deepth].push(root.val)
            traversal(root.left, deepth + 1) 
            traversal(root.right, deepth + 1) 
        }
    }
    traversal(p, 0);
    res.forEach((item, index) => {
        if(index & 1){ // 奇数
            res[index] = item.reverse()
        }
    })
    return res
}
// 优化
const zigzagLevelOrderBetter  = (p) => {
    if(!p) return []
    const res = [];
    const traversal = (root, deepth) => {
        if(root){
            if(!res[deepth] === undefined) res[deepth] = []
            res[deepth].push(root.val)
            if(deepth & 1) res[deepth].unshift(root.val)
            else res[deepth].push(root.val)
            traversal(root.left, deepth + 1) 
            traversal(root.right, deepth + 1) 
        }
    }
    traversal(p, 0);
    return res
}

//二叉搜索树中第k小的元素

const findKSmallNumber = (p, k) => {
    const res = []
    const traversal = (root) => {
        if(root) {
            traversal(root.left)
            res.push(root.val)
            traversal(root.right)
        }
        res.sort((a, b) => a - b)
    }
    return traversal(p)[k - 1]
}

//二叉树的层序遍历

const levelOrder  = (p) => {
    if(!p) return []
    const res = [];
    const traversal = (root, deepth) => {
        if(root){
            if(!res[deepth] === undefined) res[deepth] = []
            res[deepth].push(root.val)
            traversal(root.left, deepth + 1) 
            traversal(root.right, deepth + 1) 
        }
    }
    traversal(p, 0);
    return res
}