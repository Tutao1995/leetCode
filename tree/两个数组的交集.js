
/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]

示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]


说明：

输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。

*/


//常规的用法  indexof
const arrayIntersection = (nums1, nums2) => {
    let _result = []
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i])
        if (index > -1) {
            _result.push(nums1[i])
            nums2.splice(index, 1)
        }
    }
    return _result
}   


// hash map
const hashmapIntersect = (nums1, nums2) => {
    const map = {}, res = [];
    for(let num1 of nums1) {
        if(!map[num1]) {
            map[num1] = 1
        } else {
            map[num1] ++ 
        }
    }
    for(let num2 of nums2) {
        if(map[num2]) {
            map[num2] --;
            res.push(num2)
        }
    }

    return res;
}   
// 双指针 
const doubleThisIntersect = (nums1, nums2) => {
    nums1.sort( (a, b) => a - b);
    nums2.sort( (a, b) => a - b);
    let p1 = nums1.length-1, p2 = nums2.length-1, res = [];
    while( p1 >= 0 && p2 >= 0) {
        if(nums1[p1] > nums2[p2]) {
            p1 --
        } else if(nums1[p1] < nums2[p2]) {
            p2 --
        } else {
            res.unshift(nums1[p1]);
            p1 --;
            p2 --;
        }
    }
    return res;
}
const testArray1 = [1, 2, 2, 5], testArray2 = [1, 2, 2, 4];
console.log(doubleThisIntersect(testArray1, testArray2))