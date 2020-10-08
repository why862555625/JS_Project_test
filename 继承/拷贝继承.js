// 核心：通过for…in，把父类对象和原型对象上可枚举的属性和方法循环赋值到Son的原型上
// 这种方式虽然可多继承、可向父类传参，但需要循环遍历父类属性和方法效率低，而且父类原型的属性和方法也无法复用，占用堆内存空间。
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
    var father = new Father();
    for (let i in father) {
        Son.prototype[i] = father[i]
    }
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
console.log(son.hei); //200
son.run(); //父亲开始跑步
son.eat(); //父亲开始吃饭
son.sleep(); //父亲开始睡觉
son.playGame(); //父亲开始玩游戏




