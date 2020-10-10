function myNew(obj) {
    let a={};
    a.__proto__=obj.prototype;
    let result = fn.call(a);
    return a;
}
