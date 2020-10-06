// 思想：
// 1.从第一个元素开始，该元素可以认为已经被排序；
// 2.取出当前元素的后一个元素，在已经排序的元素序列中从后向前循环一遍；
// 3.如果该元素（已排序的元素）大于新元素，将该元素移到下一位置；
// 4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// 5.将新元素插入到该位置后；
// 6.重复步骤2~5。


var arr = [3, 4, 15, 80, 2, 7, 6, 5, 8, 9, 10, 16, 13]; // length = 13

function insertSort(arr) {
    var current, preIndex;
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        //当前元素的前一个元素下标
        preIndex = i - 1;
        // 将需要排序的元素用current保存起来以免因下面下标变化而取错值
        current = arr[i];
        // 开始内部循环将第一个值开始排序 终止条件为当前元素下标大于数组的第0位并且当前元素大于前一个元素    否则的话将前一个元素赋值给当前元素（arr[preIndex+1]）
        //然后将前一个元素下标-1 继续向前比较
        while (preIndex >= 0 && current < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        // 当current大于前一个元素时 把保存起来的current赋值给arr[preIndex]
        arr[preIndex + 1] = current;

    }
    return arr;
}
console.log(insertSort(arr));








