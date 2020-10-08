
// 为什么不能给父类构造函数传递参数？
// 因为父类的构造函数是在我们写 Son.prototype = new Father(“父亲”) 时执行的，而且只执行一次，当我们创建子类实例时如 const son1 = new Son(10) ，父类构造函数是不执行的，所以父类构造函数中的属性就是所有子类实例所共享的属性，其实这也是原型的作用。正是由于在创建子类实例时父类构造函数并不会执行，所以我们没有必要给父类构造函数传递参数，直接在父类构造函数中定义就可以了。

//
// 为什么son1.name 和 son2.name 值不一样？
//
// 这个问题就牵扯出了属性的原型链查找和属性赋值的问题了
//
//1\ 当我们进行属性的查找时是基于原型链查找的
// \2当我们给属性赋值时，也会先通过原型链查找是否存在此属性，如果存在并且属性的 writable 为true，那也不会修改原型链上的属性值，而是在自己实例上创建新属性，因为原型链提供的是公共的属性和方法，如果每个实例都可以修改原型链上的属性，那原型对象将很难维护。所以当原型链上属性值为基本数据类型时（如：String，Number）,这些值是不能被修改的，只会在自己的实例上修改或创建属性
// 3\如果原型上存在该属性但 writable 为 false，那么不管是原型还是子类实例都不能给该属性赋值
//4\ 如果在原型上也没查找到该属性，则也会在子类实例上创建该属性

// 为什么son1.obj.city 和 son2.obj.city值一样呢？
// 看完了上面的解释，你应该很快就会产生这个疑问，这又是为什么呢？
// 其实还是那句话js属性是基于原型链进行查找的，而我们通过 . (点语法) 就是在查找属性，而通过 =(等号) 是在给属性赋值。

// 当执行 son1.obj.city = “USA” 时，son1.obj先找到了原型上的obj对象，然后就基于obj对象开始了属性赋值，在赋值时就遵循了上个问题的流程
// 当执行 son2.obj.city = “China” 时，son2.obj也是先找到了原型上的obj对象，这个obj对象和son1.obj对象是同一个对象，在赋值时就会覆盖之前的值
// 当执行 son2.obj.sex = “woman” 时，son2.obj也是先找到了原型上的obj对象，然后发现obj对象中没有sex属性，则会创建sex属性并赋值为woman

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
