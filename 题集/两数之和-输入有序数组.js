/* 
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

var twoSum = function (numbers, target) {
    if (target < numbers[0]) return false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

/* 
    官方题解

    1.动态规划
    声明一个数组 a 记录每个 numbers 中的元素与 target 直接的差值
    如果：x+y=target，那么 target-x=y，target-y=x
    当遍历到满足要求的值直接返回，不然存贮对应的差值到 a 的对应索引位置

    2.二分法  看到是有序数字数组 就想到二分法
*/

//数组
var twoSumArray = function (numbers, target) {
    var a = [];
    for (var i = 0, len = numbers.length; i < len; i++) {
        var tmp = target - numbers[i];
        if (a[tmp] !== undefined) return [a[tmp] + 1, i + 1];
        a[numbers[i]] = i;
    }
};
//map
var twoSumMap = (numbers, target) => {
    let dp = new map(), len = numbers.length
    for (let i = 0; i < len; i++) {
        let tmp = target - numbers[i]
        if (dp.has(tmp)) {
            return [dp.get(tmp) + 1, i + 1]
        }
        dp.set(numbers[i], i)
    }
}
//对象
var twoSumObj = (numbers, target) => {
    let obj = {};
    for(let i=0;i<numbers.length;i++){
        let tmp = target - numbers[i];
        if(tmp in obj) return [obj[tmp], i + 1]
        obj[numbers[i]] = i + 1
    }
    return [-1, -1]
}

//二分法
var erfenfa = (numbers, target) => {
    let len = numbers.length;
    for(let i=0;i<len;i++){
        let tmp = target - numbers[i];
        let res = binarySearch(numbers, tmp);
        if(res !== -1 && i !== res){
            return [res + 1, i + 1 ]
        }
    }
    return [-1, -1]
}
const binarySearch = function(numbers, target) {
    let high = numbers.length
    let low = 0
    while(low <= high){
        let mid = parseInt((low + high) / 2)
        if(numbers[mid] === target){
           return mid
        }else if(numbers[mid]<target){
            low = mid + 1
        }else{
            high = mid - 1
        }
    }
    return -1
};

//双指针
var shuangzhizhen = (numbers, target) => {
    let len = numbers.length, left = 0, right = len - 1;
    while(left < right) {
        if(numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        } else if(numbers[left] + numbers[right] > target) {
            right --
        } else {
            left ++
        }
    }
    return [-1, -1]
}
console.log(twoSumObj(([0,0,0,0],0)))