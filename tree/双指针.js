/*
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
*/

const mergeArr = (arr1, arr2) => {
    let len1 = arr1.length,
        len2 = arr2.length,
        i = 0,
        j = 0,
        ret = [];
    while (i < len1 && j < len2) {
        if (arr1[i] <= arr2[j]) {
            ret.push(arr1[i]);
            i++;
        } else {
            ret.push(arr2[j]);
            j++;
        }
    }
    if (i < len1) {
        ret = [].concat(ret, arr1.slice(i));
    }
    if (j < len2) {
        ret = [].concat(ret, arr2.slice(j));
    }
    return ret;
};

const arrs1 = [2, 2, 3, 4, 5, 5],
    arrs2 = [1, 2, 5, 6, 7];

console.log(mergeArr(arrs1, arrs2), 3);
