/* 
    1.数据结构的存储方式：数组（顺序存储）、链表（链式存储）
    2.数据结构的基本操作：遍历+访问，具体：增删改查
    3.线性和非线性，线性：for、while、迭代、递归  
    4.数据结构是工具，算法是通过合适的工具解决特定问题的方法
    5.先刷二叉树，先刷二叉树，先刷二叉树！
    6.写树相关的算法，简单说就是，先搞清楚当前 root 节点该做什么，然后根据函数定义递归调用子节点，
*/
const testData = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 6
        },
        right: {
            value: 7
        }
    },
    right: {
        value: 3,
        left: {
            value: 4
        },
        right: {
            value: 5
        }
    }
};
function traverse(treeNode) {
    if (!treeNode) return;
    // 前序遍历
    traverse(treeNode.left);
    // 中序遍历
    traverse(treeNode.right);
    // 后序遍历
}

function getTreeNodeCount(treeNode) {
    if (!treeNode) return 0;
    return 1 + getTreeNodeCount(treeNode.left) + getTreeNodeCount(treeNode.right);
}
/* 
    leetcode-226 反转二叉树
*/
function invertTree(treeNode) {
    if (!treeNode) return null;
    const temp = treeNode.left;
    treeNode.left = treeNode.right;
    treeNode.right = temp;
    invertTree(treeNode.left);
    invertTree(treeNode.right);
    return treeNode;
}
/* 
    leetcode-116 填充二叉树节点右侧指针
*/
function connectTreeNode(treeNode) {
    if (!treeNode) return null;
    loop(treeNode.left, treeNode.right);
    return treeNode;
    function loop(leftNode, rightNode) {
        if (!leftNode || !rightNode) return null;
        leftNode.next = rightNode;
        loop(leftNode.left, leftNode.right);
        loop(rightNode.left, rightNode.right);
        loop(leftNode.right, rightNode.left);
    }
}
/* 
    leetcode-114 将二叉树展开为链表
*/
function treeToLink(treeNode) {
    if (!treeNode) return null;

    loop(treeNode);
    return treeNode;
    function loop(treeNode) {
        if (!treeNode) return;
        loop(treeNode.left);
        loop(treeNode.right);

        let left = treeNode.left;
        let right = treeNode.right;

        treeNode.left = null;
        treeNode.right = left;

        let temp = treeNode.right;
        if (temp) {
            while (temp.right) {
                temp = temp.right;
            }
            temp.right = right;
        }
    }
} /* 
    leetcode-654 构造最大二叉树
*/
function createBiggestTree(list) {
    if (!list.length) return;
    return loop(list);
    function loop(list) {
        let ret = {};
        const maxItem = Math.max(...list);
        const index = list.findIndex(item => item === maxItem);
        const leftList = list.slice(0, index);
        const rightList = list.slice(index + 1);
        ret.value = maxItem;
        ret.left = loop(leftList);
        ret.right = loop(rightList);
        return ret;
    }
}
/* 
    leetcode-105 从前序遍历和中序遍历构造二叉树

    前序遍历：[root，左，右]  获取root  根据左右生成树
    中序遍历：[左，root，右]  根据root获取左右
*/
function createBinaryTree(preOrder, inOrder) {
    if (!preOrder.length || !inOrder.length) {
        return null;
    }
    if (preOrder.length === 1) return preOrder[0];
    if (inOrder.length === 1) return inOrder[0];
    let root = {};
    const rootValue = preOrder[0];
    const rootIndex = inOrder.findIndex(item => item === rootValue);
    const leftInList = inOrder.slice(0, rootIndex);
    const rightInList = inOrder.slice(rootIndex + 1);
    const leftPreList = preOrder.slice(1, leftInList.length + 1);
    const rightPreList = preOrder.slice(leftInList.length + 1);
    root.value = rootValue;
    root.left = createBianryTree(leftPreList, leftInList);
    root.right = createBianryTree(rightPreList, rightInList);
    return root;
}
console.log(createBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

/* 
    leetcode-106 从中序遍历和后续遍历构造二叉树
    后序遍历：[左，右，root]  
    中序遍历：[左，root，右]  

*/
function createBinaryTree2(nextOrder, inOrder) {
    if (!nextOrder.length && !inOrder.length) {
        return null;
    }
    if (nextOrder.length === 1) return nextOrder[0];
    if (inOrder.length === 1) return inOrder[0];
    let root = {};
    const rootValue = nextOrder[nextOrder.length - 1];
    const rootIndex = inOrder.findIndex(item => item === rootValue);
    const leftInList = inOrder.slice(0, rootIndex);
    const rightInList = inOrder.slice(rootIndex + 1);
    const leftPreList = nextOrder.slice(0, leftInList.length + 1);
    const rightPreList = nextOrder.slice(leftInList.length + 1, nextOrder.length - 1);
    root.value = rootValue;
    root.left = createBinaryTree2(leftPreList, leftInList);
    root.right = createBinaryTree2(rightPreList, rightInList);
    return root;
}
console.log(createBinaryTree2([9, 15, 7, 20, 3], [9, 3, 15, 20, 7]));

// console.log('test:', testData);
// console.log('getTreeNodeCount:', getTreeNodeCount(testData));
// console.log('invertTree:', invertTree(testData));
// console.log('connectTreeNode:', connectTreeNode(testData));
// console.log('treeToLink:', treeToLink(testData));

/* 
    leetcode-652 寻找重复的子树
*/
function findRepeatNode(treeNode) {
    const res = [],
        visited = new Map();
    loop(treeNode);
    return res;
    function loop(treeNode) {
        if (!treeNode) return '#';
        const left = loop(treeNode.left);
        const right = loop(treeNode.right);
        const str = `${left},${right},${treeNode.value}`;
        const count = visited.get(str);
        if (!visited.has(str)) {
            visited.set(str, 1);
        } else {
            count === 1 && res.push(treeNode);
            visited.set(str, count + 1);
        }
        return str;
    }
}

