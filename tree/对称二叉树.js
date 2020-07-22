/* 
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const check = (left, right) => {
        // 参数接收左右子树
        if (!left && !right) return true; // 左右子树都不存在 也是对称的
        if (left && right) {
            // 左右子树都存在，要继续判断
            return (
                left.val === right.val && // 左右子树的顶点值要相等
                check(left.left, right.right) && // 左子树的left和右子树的right相等
                check(left.right, right.left)
            ); // 左子树的right和右子树的left相等
        }
        return false; // 左右子树中的一个不存在，一个存在，不是对称的
    };
    return !root || check(root.left, root.right); // root为null也是对称的
    // 不满足则调用check判断左右子树
};


/* 
BFS

入 queue 的顺序：
    左子树的左子树，右子树的右子树
    左子树的右子树，右子树的左子树。
出 queue 的时候，检查两两是否对称

*/

var queue = (root) => {
    if(!root) return true
    let queue = [root.left, root.right]; //左右子树入列
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i += 2) {
            let left = queue.shift();
            let right = queue.shift();
            if((left && !right) || (!left && right)) return false;
            if(left && right) {
                if(left.value !== right.value) return false;
                queue.push(left.left, right.right);
                queue.push(left.right, right.left)
            }
        }
    }
    return true
}