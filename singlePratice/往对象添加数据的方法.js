// 第一种方法
let obj ={"name":"tom","age":16}
let key = "id";
let value = 2
obj[key] = value;
console.log(obj)
//
// 第二种方法，利用扩展运算符,简单又实用
var obj1={"vue":300,"jquery":200};
var obj2={"react":500};
var obj3={
    ...obj1,
    ...obj2
}

console.log(obj3)

// 第三种办法
let obj4 = {a:"1"};
let obj5 = {b:"2"};
let obj6 = {c:"3"};
c=Object.assign({},obj4,obj5,obj6);
console.log(c)