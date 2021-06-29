/*
    描述：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

    空间换时间   Map  求和问题 -》 求差
*/
const getTarget = (arr, target) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let iValue = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let jValue = arr[j];
            if (jValue + iValue === target) {
                return [i, j];
            }
        }
    }
};

const getTargetMap = (arr, target) => {
    let i = 0,
        len = arr.length,
        map = new Map();
    while (i < len) {
        if (map.has(arr[i])) {
            return [map.get(arr[i]), i];
        } else {
            map.set(target - arr[i], i);
            i++;
        }
        console.log(map, i);
    }
};

const test = [1, 2, 4, 5, 6],
    target = 11;

console.log(getTargetMap(test, target));
