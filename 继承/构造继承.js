//
// 通过在Son构造函数中调用Father.call(this)去改变Father构造中this的指向来达到继承，
// 这种通过call方式实现的继承，即可以实现多继承，也解决了不能向Father中传递参数的问题，但是却无法继承Father原型上的属性和方法，而且通过call方式的实现的继承，相当于给每个对象添加了父类构造中的属性和方法无法实现方法的复用，也占用堆内存空间。





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
    Father.call(this);
    this.age = age;
    this.sleep = function () {
        console.log(this.name + "开始睡觉")
    }
}

Son.prototype.playGame = function () {
    console.log(this.name + "开始玩游戏")
};
const son = new Son(10);

console.log(son.name); //父亲
console.log(son.age); //10
console.log(son.hei); //undefined 因为无法调用Father原型上的属性
son.run(); //父亲开始跑步
// son.eat(); //会报错 因为无法调用Father原型上的方法
son.sleep(); //父亲开始睡觉
son.playGame(); //父亲开始玩游戏
