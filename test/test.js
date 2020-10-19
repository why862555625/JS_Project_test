a=[1,2,[3,1],32,[12,31],32,1]
b=a.join(',').split(',').map(function (i) {
return i-0
})
console.log(b)