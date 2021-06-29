/*
    栈  Stack  后进先出   push  pop
    题目中若涉及括号问题，则很有可能和栈相关。

    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串。
*/

const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}",
};

const leftList = ["(", "{", "["];
const isValid = function (s) {
    if (!s) return true;
    let stack = [];
    let len = s.length;
    for (let i = 0; i < len; i++) {
        const ch = s[i];
        if (leftList.includes(ch)) stack.push(leftToRight[ch]);
        else {
            if (!stack.length || stack.pop() !== ch) return false;
        }
    }
    return !stack.length;
};

const test = ["(", "{", "[", "]", "}"];

console.log(isValid(test));

var largeGroupPositions = function (s) {
    let len = s.length;
    let i = 0;
    let ret = [];
    while (i < len) {
        let ch = s[i];
        let temp = i + 1;
        let flag = false;
        while (ch === s[temp]) {
            temp++;
            flag = true;
        }
        console.log();
        if (flag && temp - i > 2) {
            ret.push([i, temp - 1]);
        }
        i = temp;
    }
    return ret;
};

var largeGroupPositionsNew = function (s) {
    let ret = [];
    let i = 0;
    let j = 1;
    let len = s.length;
    if (len < 3) return [];
    while (i < len && j < len) {
        if (s[i] !== s[j]) {
            if (j - i > 2) {
                ret.push([i, j - 1]);
            }
            i = j;
        }
        j++;
    }
    if (i === 0) ret.push([0, len - 1]);
    if (j === len && j - i > 2 && i > 0) ret.push([i, len - 1]);
    return ret;
};

/*
作者：jack-108
链接：https://leetcode-cn.com/problems/positions-of-large-groups/solution/shun-xu-bian-li-ji-jian-javascript-68ms-da-bai-100/
*/
var largeGroupPositionsJack = function (S) {
    let start = 0,
        end = 0;
    let result = [];
    for (let i = 1; i <= S.length; i++) {
        if (S[i] === S[i - 1]) {
            end++;
        } else {
            if (end - start >= 2) {
                result.push([start, end]);
            }
            start = end = i;
        }
    }
    return result;
};

console.log(largeGroupPositionsNew("babaaaabbb"));
