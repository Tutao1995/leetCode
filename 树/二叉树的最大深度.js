/* 

给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
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
 * @return {number}
 */
//第一版  92ms(22.7%) 40.9M(8.33%)  
var maxDepth1 = function(root) {
    if(!root) return 0;
    let res = [];
    const check = (root, deepth) => {
        if(!root.left && !root.right) {
            res = res.push(deepth)
        }
        if(root.left) check(root.left, deepth + 1);
        if(root.right) check(root.right, deepth + 1)
    }
    check(root, 1);
    return Math.max(...res)
}   



//第二版
//  100ms(12.33%)   40.8(8.33%)
var maxDepth1 = function(root) {
    if(!root) return 0;
    let res = 0;
    const check = (root, deepth) => {
        if(!root.left && !root.right) {
            res = Math.max(res, deepth)
        }
        if(root.left) check(root.left, deepth + 1);
        if(root.right) check(root.right, deepth + 1)
    }
    check(root, 1);
    return res
}   

/* 
别人题解
作者：xiao-jian-feng
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/jsqiu-er-cha-shu-zui-da-gao-du-jie-ti-si-lu-by-xia/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

队列

*/
// 104ms(8.94%)    40.9M(8.33%)
var queue = (root) => {
    if(root === null) return 0;
    let num = 0; //记录层数
    let que = []; //遍历辅助队列
    que.push(root) //根节点入队
    while(que.length) { 
        let length = que.length //当前队列长度，目的是要清空到目前为止的队列的所有节点
        for(var i =0; i < length; i++) { //清空队列节点，当然不包含新入队的，因为新入队的是下一层的节点
            let cur = que.shift() //取队首首节点，并使之出队
            if(cur.left) { //左节点若存在并入队
                que.push(cur.left)
            }
            if(cur.right) { //右节点存在测入队
                que.push(cur.right)
            }
        }
        num++ //层数+1
    }
    return num;
}