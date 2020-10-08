// 使用对象冒充的方式实现继承，只能集成父类构造函数中带有this的属性和方法，不能继承父类原型上的方法想要理解对象冒充继承就必须要理解this指向的问题，我们在Son构造函数中，通过this.newMethod = Father;给Son自定义了一个属性字段newMethod并把Father函数赋值给它（此时Father就当一个函数来用），然后我们通过newMethod调用Father这个函数，并把name值传递过去，此时Father函数中的this指向的是通过new创建的对象son，这就相当于给对象son添加了Father中带this的属性或方法，然后再通过delete this.newMethod把Son构造函数中临时添加的属性删除掉。这样就实现了子类继承父类的属性和方法了。同时还支持多继承，但当多继承出现同名属性或方式时，后面的会覆盖前面的。


function Father(name) {
    this.name = name;
    this.run = function () {
        console.log(this.name + "开始跑步")
    }
}

function Son(name) {
    this.newMethod = Father;
    this.newMethod(name);
    delete this.newMethod;
}

const son = new Son("父亲");
console.log(son); //Son {name: "父亲", run: ƒ}
console.log(son.name); //父亲
son.run(); //父亲开始跑步
