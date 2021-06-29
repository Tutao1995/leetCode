function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.left = right === undefined ? null : right;
}

/* 
    leetcode-96 不同的二叉搜索树
    个数
*/
const generateTreeCount = (n) => {
    const memo = Array.from(new Array(n + 1), () => new Array(n + 1).fill(0));
    const loop = (start, end) => {
        if (start > end) return 1;
        if (memo[start][end] !== 0) return memo[start][end];
        let res = 0;
        for (let i = start; i <= end; i++) {
            const left = loop(start, i - 1);
            const right = loop(i + 1, end);
            res += left * right;
        }
        memo[start][end] = res;
        return res;
    };
    return loop(1, n);
};

console.log(generateTreeCount(3));

/* 
    leetcode-95 不同的二叉搜索树
    列举全部
*/

const generateTreeAll = (n) => {
    const loop = (start, end) => {
        let res = [];
        if (start > end) {
            res.push(null);
            return res;
        }
        for (let i = start; i <= end; i++) {
            const left = loop(start, i - 1);
            const right = loop(i + 1, end);
            for (let m = 0; m < left.length; m++) {
                for (let n = 0; n < right.length; n++) {
                    let root = new TreeNode(i);
                    root.left = left[m];
                    root.right = right[n];
                    res.push(root);
                }
            }
        }
        return res;
    };
    return loop(1, n);
};

console.log(generateTreeAll(3));

/* 
    leetcode-98 验证二叉搜索树
    BST:左 < root < 右
*/
const isValidBST = (root) => {
    const loop = (root, min, max) => {
        if (!root) return true;
    };
    return loop(root);
};

let testObj = { val: 6, left: { val: 1 } };
