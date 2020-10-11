inner = 'window';
function say() {
    console.log(inner);
    //函数体没有定义，向上查找
    console.log(this.inner);
    //函数直接执行，this为window
}
var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner);
            //返回的对象是return对象，在执行的时候函数没有向上查找
            console.log(this.inner);
            //this指向这个对象
        }
    }
})();
var obj2 = (function() {
    var inner = '2-1';
    return {
        inner: '2-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();
say();

obj1.say();
obj2.say();
obj1.say = say;
obj1.say();
obj1.say = obj2.say;
obj1.say();
