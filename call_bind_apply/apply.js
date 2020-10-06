var name = 'zs';
let obj1 = {
    name: 'ls'
};
a=[1,23,4]


function fn(a, b) {

    console.log(this.name + a + b);
};

Function.prototype.myaplly = function (obj, array = []) {

    obj.fun = this;
    obj.fun(...array);
    delete obj.fun;
}

fn.myaplly(obj1,['1','2'])
