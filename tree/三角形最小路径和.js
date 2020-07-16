/* 
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

*/
//1. 递归 自顶向下  会超出时间限制  当数组很大时
var minimumTotal = function(triangle) {
    let len =triangle.length, row = 0, col = 0;
    function helper(row,col,triangle){
        if(row == len -1){
            return triangle[row][col];
        }
        let left = helper(row+1,col,triangle);
        let right = helper(row+1,col+1,triangle);
        return Math.min(left,right)+triangle[row][col];
    }
    return helper(row,col,triangle);
};

/* 
 思路： 最后的值为  当前行得值 + min（letf， right）
最开始的为  arr[0][0] + min(arr[1][0],arr[1][1])

*/
const test = [
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]
const test1 = [[-1],[2,3],[1,-1,-3]]



const getValue = () => {

}

console.log(minimumTotal(test1))