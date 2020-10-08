// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
// 如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性
//
// 通过call实现对象上的多继承
// 通过Object.assign把其他类原型上的属性和方法拷贝到Son的原型上，以此实现原型上的多继承
function Son() {
    Father.call(this);
    OhterClass1.call(this);
    OhterClass2.call(this);
}

Son.prototype = Object.create(Father.prototype);
Object.assign(Son.prototype, OhterClass1.prototype, OhterClass2.prototype);
Son.prototype.constructor = Son;
