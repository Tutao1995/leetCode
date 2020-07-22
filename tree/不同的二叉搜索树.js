/* 
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。


示例：

输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 

提示：

0 <= n <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/
/* 

概念： 
树：是一类重要的非线性数据结构，是以分支关系定义的层次结构。每个结点有零个或多个子结点；没有父结点的结点称为根结点；每一个非根结点有且只有一个父结点；除了根结点外，每个子结点可以分为多个不相交的子树
二叉树：一棵二叉树是结点的一个有限集合，该集合或者为空，或者是由一个根节点加上两棵别称为左子树和右子树的二叉树组成。
搜索树（查找树）： 查找树既可以作为一个字典又可以作为一个优先队列。
二叉搜索树：一棵二叉查找树是以一棵二叉树来组织的。
中序遍历：树根位于左子树和右子树之间
先序遍历：树根位于左右子树之前
后序遍历：树根位于左右子树之后
*/

/* 
官方：
思路
按照 BST 的定义，如果整数 i 作为根节点，则整数 1 ~ i-1 会去构建左子树，i+1 ~ n 会去构建右子树
以 i 为根节点的 BST 种类数 = 左子树 BST 种类数 * 右子树 BST 种类数
所以，不同的 i 之下，左右 BST 子树任意搭配出不同的组合，就构成了不同的 BST
*/
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// Definition for a binary tree node
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

const generateTrees = (n) => {
    if (n == 0) return [];
    const getAllBSTs = (low, high) => {
        if (low > high) return [null];
        if (low == high) return [new TreeNode(low)];
        const res = [];
        for (let i = low; i <= high; i++) {
            const leftBSTs = getAllBSTs(low, i - 1);
            const rightBSTs = getAllBSTs(i + 1, high);
            for (const leftBST of leftBSTs) {
                for (const rightBST of rightBSTs) {
                    const root = new TreeNode(i);
                    root.left = leftBST;
                    root.right = rightBST;
                    res.push(root);
                }
            }
        }
        return res;
    };
    return getAllBSTs(1, n);
};

//记忆化 递归

const generateTreesMemory = (n) => {
    if (n == 0) return [];
    const memo = new Array(n + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(n + 1);
    }
    const getAllBSTs = (low, high) => {
        if (low > high) return [null];
        if (memo[low][high]) return memo[low][high];
        if (low == high) return [new TreeNode(low)];
        const res = [];
        for (let i = low; i <= high; i++) {
            const leftBSTs = getAllBSTs(low, i - 1);
            const rightBSTs = getAllBSTs(i + 1, high);
            for (const leftBST of leftBSTs) {
                for (const rightBST of rightBSTs) {
                    const root = new TreeNode(i);
                    root.left = leftBST;
                    root.right = rightBST;
                    res.push(root);
                }
            }
        }
        return (memo[low][high] = res);
    };
    return getAllBSTs(1, n);
};

console.log(generateTrees(3).length);
