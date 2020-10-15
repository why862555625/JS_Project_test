
let a='(555)666777';
let old=/\((\d{3})\)/
let b=a.replace(old,"$1")
console.log(a) //(555)666777
console.log(b) //555666777