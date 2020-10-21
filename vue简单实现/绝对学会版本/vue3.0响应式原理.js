const  toProxy=new WeakMap()  //存放的是代理后的对象  弱引用类型的好处？哈希表
const     toRaw=new WeakMap()// 存放的是代理前的对象



function trigger() {
    console.log('触发新视图更新')
}

function isObject(target) {
    return typeof target === 'object' && target !== null
}

function reactive(target) {
    if (!isObject(target)) return target;
    //如果代理表中已经存在了，直接把结果返回
    if (toProxy.get(target)){
        return  toProxy.get(target)
    }
    //如果这个对象已经被代理过了,就把对象原封不动的返回
    if (toRaw.has(target)){
        return target
    }
 const   handlers = {//触发的方法
        set(target, key, value, receiver) {
            if (target.hasOwnProperty(key)) {
                trigger()
            }
            return Reflect.set(target, key, value);//设置值
        },
        get(target, key, receiver) {
            //如果是obj还需要代理
            const res = Reflect.get(target, key, receiver)
            if (isObject(target[key])) {
                return reactive(res)
            }
            return res
        },
        deleteProperty(target, key) {
            return Reflect.deleteProperty(target, key)
        }


    }
    //当我们操作代理对象的时候会触发handlers中的操作
    let observed = new Proxy(target, handlers);
    toProxy.set(target,observed)//源对象和代理后的结果
    toRaw.set(observed,target)
    return observed
}

let obj1 = {
    name: 'zf',
    a: [123]
}
let p = reactive(obj1)
p.name = 'jw'
//