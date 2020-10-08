


// 通过这种继承的方式，即可以向父类中传递参数，因为调用call方法就会调用父类的构造函数，也不会创建多余的实例占用内存，也可以通过Object.assign实现多继承，推荐使用


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

Son.prototype = Object.create(Father.prototype);
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
