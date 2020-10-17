let  a = { 3:'cd',
        1:'as',

    2:'b'
}

console.log(Reflect.ownKeys(a))
console.log(Object.getOwnPropertyNames(a))

b=Object.entries(a)
c=b.sort(function (a,b) {
return a[1]-b[1]

})
console.log(c)