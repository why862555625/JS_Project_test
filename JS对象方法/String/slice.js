// 提取字符串的一部分，并返回一个新字符串，原字符串不改变
// end 为负数时，等价于str.length+end,去掉右侧|end|个字符
let a=' asdfsfaf   '
let b=a.slice(4,5)
let c=a.slice(4,-1)
console.log(a)
console.log(b)
console.log(c)