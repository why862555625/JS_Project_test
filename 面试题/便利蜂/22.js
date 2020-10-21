a={
    b:'123',
    c:{
        d:1232
    }
}
b=[12,3,12,31,23]
console.log(Object.getOwnPropertyNames(a))
console.log(Object.values(a))
console.log(Reflect.ownKeys(a))
Object.defineProperty(a,"b",{

    enumerable:false
})
