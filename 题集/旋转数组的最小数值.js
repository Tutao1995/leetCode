/* 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

//自己的  找出数组最小值   88ms(18.4%)  38M(100%)
var minArray = function (numbers) {
    if (!numbers) return null;
    if (numbers.length === 1) return numbers[0];
    return Math.min(...numbers);
};

//官方
/* 
思路：
    重新描述下題目，描述旋转数组就是说明给定数组不是全正序数组
    给定一个数组，其中有 n 项数别调转的排序数组(正序)
    求被这种类型数组的最小数是多少
    循环给定数组，如果其前一个元素不小于它则记录其为最小值
    默认第一个元素是数组最小值
*/

//  116ms(6.65%)  38M(100%)
var minArray1 = function (numbers) {
    let _result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (_result > numbers[i]) _result = numbers[i];
    }
    return _result;
};

// 二分法
/* 
    left，right 做分区的边界，mid 做二分的中点
    比较边界值：
    left 大于 right，说明分区存在非排序片段，且 left 位置不可能是结果，则缩小范围，left+1
    left 小于 right，默认分区为有序，正常二分
    left 等于 right，无法判断有序或者无序，缩小搜索范围（left+1 或者 right--）

*/
var minArray2 = function (numbers) {
    var len = numbers.length,
        left = 0,
        right = len - 1,
        mid = 0;
    while (left < right) {
        mid = left + parseInt((right - left) / 2, 10);
        if (numbers[left] < numbers[right]) {
            right = mid;
        } else if (numbers[left] > numbers[right]) {
            left = left + 1;
        } else {
            right--;
        }
    }
    return numbers[left];
};
