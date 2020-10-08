// 在调用 new 的过程中会发生以下四件事
// 新生成一个对象
// 将构造函数的作用域赋值给新对象（即绑定新对象的 this）
// 执行构造函数中的代码（即为这个新对象添加属性）
// 返回新对象




// 实现一个new操作符
function myNew() {
    // 创建一个新对象obj
    let obj = new Object();
    // 取参数的第一项为构造函数fn,这里可以写(arguments,1)也可以直接(arguments)，都是代表参数的第一项，取构造函数
    let fn = [].shift.call(arguments);

    // 将obj.__proto__连接到构造函数fn的原型
    obj.__proto__ = fn.prototype;
    // result接收构造函数执行后的返回结果
    let result = fn.apply(obj, arguments);
    // 如果构造函数返回一个对象，则将该对象返回，否则返回步骤1创建的对象
    return typeof result === 'object' ? result : obj;
}
//测试
function Person(name) {
    this.name = name;
}

var p2 = myNew(Person, "小明");
console.log(p2.name);


// 其实，对于创建一个对象来说，都是通过 new 产生的，字面量创建一个对象本质是通过 new Object()，而且更推荐这种方式创建对象。因为使用构造函数的方式创建对象需要通过作用域链一层层找到 Object。





