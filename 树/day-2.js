/* 
    二叉搜索树  BST
    定义：对于node而言，他的每个节点的左子树的值都比node值小，其右子树的值比node的值大 ，其每个节点都为BST
    node.left.value < node.value < node.right.value
    特点：其中序遍历有序（升序）
*/

function traverse(root) {
    if (root === null) return;
    traverse(root.left);
    // 中序遍历
    console.log(root.value);
    traverse(root.right);
}

/* 
    leetcode - 230  BST第k小的元素
*/
// 自己解法

function findValueByOrder(root, number) {
    const ret = [];
    loop(root);
    console.log(ret, 'ret');
    return ret[number - 1];
    function loop(root) {
        if (root === null) return;
        loop(root.left);
        ret.push(root.value);
        loop(root.right);
    }
}

// 别人题解
// 递归
function kThSmallest(root, k) {
    let res = '';
    loop(root);
    return res;
    function loop(root) {
        if (root && k > 0) {
            loop(root.left);
            if (--k === 0) {
                res = root.value;
                return;
            }
            loop(root.right);
        }
    }
}

/* 
    leetcode-538  把二叉搜索树变成累加树
    给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。
    左 > val > 右
*/
function BST2GST(root) {
    let sum = 0;
    loop(root);
    function loop(root) {
        if (!root) return null;
        loop(root.right);
        sum += root.value;
        root.value = sum;
        loop(root.left);
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/* 某个节点是否在搜索树里 */
function isInBST(root, target) {
    if (!root) return false;
    if (root.value === target) {
        return true;
    } else if (root.value < target) {
        isInBST(root.right);
    } else {
        isInBST(root.left);
    }
}
/* 
    leetcode-450  删除二叉搜素树中的节点
*/
function removeBSTNode(root, target) {
    if (!root) return;
    if (root.value === target) {
        if (!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            // 找到左子树最大的节点 或者 右子树最小的节点来替换自己
            const minNode = getMin(root.right);
            root.value = minNode.value;
            root.right = removeBSTNode(root.right, minNode.value);
        }
    } else if (root.value < target) {
        root.right = removeBSTNode(root.right, target);
    } else {
        root.left = removeBSTNode(root.left, target);
    }
    return root;
}

function getMin(root) {
    let ret = root;
    while (root.left) {
        ret = root.left;
    }
    return ret;
}

function insertBSTNode(root, target) {
    if (root === null) return new TreeNode(target);
    if (root.value === target) {
    } else if (root.value < target) {
        root.right = insertBSTNode(root.right, target);
    } else {
        root.left = insertBSTNode(root.left, target);
    }
    return root;
}

function searchNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val < val) return searchNode(root.right, val);
    if (root.val > val) return searchNode(root.left, val);
}
/* 
    leetcode - 96  不同的二叉搜索树
*/
function numTrees(n) {
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;
    for (let i = 2; i < n + 1; i++) {
        // 长度
        for (let j = 1; j < i + 1; j++) {
            // root.value
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G;
}

const test = {
    value: 3,
    left: {
        value: 1,
        left: null,
        right: {
            value: 2,
            left: null,
            right: null
        }
    },
    right: {
        value: 4,
        left: null,
        right: null
    }
};

console.log(findValueByOrder(test));
