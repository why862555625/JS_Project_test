function Father() {
    this.name = "父亲";
    this.run = function () {
        console.log(this.name + "开始跑步")
    }
}

Father.prototype = {
    constructor: Father, //自定义原型对象时，尽量重写constructor再指向该函数
    hei: 200,
    eat: function () {
        console.log(this.name + "开始吃饭")
    }
};

function Son(age) {
    this.age = age;
    this.sleep = function () {
        console.log(this.name + "开始睡觉")
    }
}

Son.prototype = new Father();
Son.prototype.constructor = Son;
Son.prototype.playGame = function () {
    console.log(this.name + "开始玩游戏")
};
const son = new Son(10);

console.log(son.name); //父亲
console.log(son.age); //10
son.run(); //父亲开始跑步
son.eat(); //父亲开始吃饭
son.sleep(); //父亲开始睡觉
son.playGame(); //父亲开始玩游戏
//
// 基于原型链继承的查找方式是，如son.run()首先现在son对象内查找，没有找到则通过son.__proto__去Son.prototype 原型链上查找，所以就进入到new Father()对象中查找，找到了所以就打印出父亲开始跑步，查找son.name是同样的步骤，当查找son.eat()时，在new Father()对象中没有找到，则又通过Father.__proto__去Father.prototype原型上查找找到了，所以就打印出父亲开始吃饭通过这种方式继承，只要父类新增公共属性或公共方法或原型属性和方法，子类都可以访问到，但不能给父类构造传递参数，这在原型链中是标准做法。要确保构造函数没有任何参数，也无法实现多继承。
//
// 其实上面的解释多少有点牵强，为什么不能给父类构造传递参数，那接下来我们就通过一个例子来具体剖析下它的内部原理