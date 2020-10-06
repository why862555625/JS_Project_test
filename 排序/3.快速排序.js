// 思想：
//
// 创建两个数组left right
// 取一个基准值可以数组中任一元素 下面取了数组的中间元素并且从数组中剥离出来
// 将数组中的元素与基准值比较 小于基准值的放进左边 left数组 大于基准值的放进右边right数组
// 重复 步骤2

var arr = [3, 4, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 10
function quickSort(arr) {
    if (arr.length <= 1) { return arr; }
    //     基准值
    var pivot = arr[Math.floor(arr.length / 2)];
    arr.splice(arr.indexOf(pivot), 1);
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }

    }
    return quickSort(left).concat([pivot], quickSort(right));

}

console.log(quickSort(arr));
