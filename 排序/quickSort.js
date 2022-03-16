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
        while (i < end && arr[i] <= pivot) {
            // 保证 start - i 的值是小于 pivot的
            i++;
        }
        while (j > start && arr[j] > pivot) {
            // 保证 j - end 的值是大于 pivot的
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

const quickSort2 = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const index = Math.floor(len / 2);
    let pivot = null;
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        index === i
            ? (pivot = item)
            : item > pivot
            ? right.push(item)
            : left.push(item);
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};

const quickSort3 = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const index = Math.floor(len / 2);
    let pivot = arr.splice(index, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        item > pivot ? right.push(item) : left.push(item);
    }
    return quickSort2(left).concat([pivot], quickSort2(right));
};

let arr = [];
for (let i = 0; i < 10000; i++) {
    arr.push(10000 - i);
}
// shuffle(arr);
// quickSort(arr);
const startTime = new Date().getTime();
console.log(new Date(), "before");
quickSort2(arr);
console.log(new Date().getTime() - startTime, "end1");

const startTime2 = new Date().getTime();
console.log(new Date(), "before");
quickSort3(arr);
console.log(new Date().getTime() - startTime2, "end2");
