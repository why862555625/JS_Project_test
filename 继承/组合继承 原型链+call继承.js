// 通过这种组合的模式，实现了向父类构造传递参数，也可实现父类构造函数内属性和方法的多继承，但无法实现父类原型的多继承， 通过Son.prototype = new Father()只可让子类的原型继承某一父类的原型，而且组合继承会调用两次 父类构造函数，只是子类实例中的属性和方法把子类原型上的屏蔽掉了而已。同样会占用内存。
//


function Son(age) {
    Father.call(this);
    this.age = age;
    this.sleep = function () {
        console.log(this.name + "开始睡觉")
    };
}

Son.prototype = new Father();
// Son.prototype = new Father().__proto__;
// Son.prototype = Father.prototype;
//让constructor再指向Son构造函数，否则会执行Father构造函数
Son.prototype.constructor = Son;
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
