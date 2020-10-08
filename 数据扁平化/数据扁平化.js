let a = [1, [2, 3, [4]]];

//数组降维，扁平化
function isArray(obj) {
    return Object.prototype.toString.call(obj) == '[object Array]'

}
var arr = [1, [1], 2, 3, [2, 3, 4, [null, 2, 3, 4, [1]]]];
function flatten(arr) {
    var arr = arr || [],
        resArr = [],
        len = arr.length

    for (let i = 0; i < len; i++) {
        if (isArray(arr[i])) {
            resArr = resArr.concat(flatten(arr[i]))  //数组中可能还有数组
            // flatten(resArr)                 //递归失败原因
            // console.log(resArr)
        } else {
            resArr.push(arr[i])
        }
    }
    return resArr
}




// 方法2
const flatten2 = (arr)=>{
    let resArr = []
    arr.forEach(item=>Object.prototype.toString.call(item) == '[object Array]' ? resArr = resArr.concat(flatten2(item)) : resArr.push(item))
    return resArr
}










console.log(flatten(a))
