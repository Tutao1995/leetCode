const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    sort(arr, 0, arr.length - 1);
};

const sort = (arr, start, end) => {
    if (start >= end) return;
    const p = partition(arr, start, end);
    sort(arr, start, p - 1);
    sort(arr, p + 1, end);
};
/* 
    思路：将数组进行分块，去中间值，小于中间值的放在前面，大于中间值的放在后面。 反复这个过程。直到生一个元素。

*/

const partition = (arr, start, end) => {
    let i = start + 1,
        j = end;
    let pivot = arr[start];
    while (i <= j) {
        while (i < end && arr[i] <= pivot) {  // 保证 start - i 的值是小于 pivot的
            i++;
        }
        while (j > start && arr[j] > pivot) { // 保证 j - end 的值是大于 pivot的
            j--;
        }
        if (i >= j) {
            break;
        }
        swap(arr, i, j);
    }
    swap(arr, start, j);
    return j;
};

const swap = (arr, startIndex, endIndex) => {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
};

const shuffle = (arr) => {
    arr.sort(() => 0.5 - Math.random());
};

const arr = [9, 8 ,];
shuffle(arr);
quickSort(arr);
console.log(arr);
