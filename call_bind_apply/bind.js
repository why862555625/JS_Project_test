// 1、bind是返回一个函数
// 2、两次传参



Function.prototype.mybind = function (obj, ...args) {

    return (...args2)=>{
        obj.fn=this
        obj.fn(...args.concat(args2))
        delete  obj.fn
    }
}


