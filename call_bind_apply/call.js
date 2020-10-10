// 先说一下三者的区别
// 共同点就是修改this指向，不同点就是
// 1.call()和apply()是立刻执行的， 而bind()是返回了一个函数
// 2.call则可以传递多个参数，第一个参数和apply一样，是用来替换的对象，后边是参数列表。
// 3.apply最多只能有两个参数——新this对象和一个数组argArray


// 一、手写实现Call
// 1.call主要都做了些什么。
// 更改this指向
// 函数立刻执行

var name = 'zs';
let obj1 = {
    name: 'ls'
};

function fn(a,b) {

    console.log(this.name + a+b);
};


Function.prototype.myCall = function (obj, ...args) {
    //最重要的一步，1、mycall内部的this是指向调用者fn函数
    //2、obj.fun就是fn函数，obj对象调用了fn函数，因此fn函数内部的this指向obj
    obj.fun = this;
    obj.fun(...args);
    delete obj.fun;
}
fn.myCall(obj1,'a','b');










