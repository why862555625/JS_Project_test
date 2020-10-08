function Father(name) {
    this.name = name;
    this.obj = {
        work:'IT',
        city:'BJ'
    }
}
Father.prototype = {
    constructor: Father,
    PI: 3.14,
};
function Son(age) {
    this.age = age;
}
Son.prototype = new Father("父亲");
Son.prototype.constructor = Son;

const son1 = new Son(10);
son1.name = "杰克";
son1.obj.city = "USA";
const son2 = new Son(20);
son2.name = "萝丝";
son2.obj.city = "China";

son2.obj.sex = 'woman'; //单独给son2实例添加

console.log(son1.name); //杰克
console.log(son1.obj.city); //China

console.log(son2.name); //萝丝
console.log(son2.obj.city); //China

console.log(son1.obj.sex); //woman
console.log(son2.obj.sex); //woman

console.log(son1);
console.log(son2);
