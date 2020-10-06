// 思想：
//
// 先建立一个外部循环为总比较次数 再写一个内循环为两两比较的次数
// 第一个内循环结束应将数组中最大的数排在了数组的最右边
// 经过arr.length-1次循环 数组中的元素按照从小到大的顺序排列
//


var arr = [3, 4, 15,80,7, 2, 6, 5, 8, 9, 10, 16, 13]; // length = 13

function bubbleSort(arr){
    //因为冒泡排序算法是两两比较 所以外层比较次数应为数组长度-1
    for(var i = 0; i<arr.length - 1; i++){
        //  内循环的比较不必全部执行完  因为每一轮的内循环都会将最大的数排在最右
        //  所以后面的次数不用比较 所以内循环的次数是递减的 需要减去一个i
        for(var j = 0; j < arr.length -1 - i; j++){
            if(arr[j] > arr[j+1]){
                var t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
        console.log(arr)
    }
    return arr;
}
console.log(bubbleSort(arr));
