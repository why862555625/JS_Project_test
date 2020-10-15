let a=' asdfsfaf   ';
let old=/[a-zA-Z]{3}/g
b=a.match(old)
c=a.match('asd')
console.log(a) //asdfsfaf
console.log(b)  //[ 'asd', 'fsf' ]
console.log(c) //[ 'asd', index: 1, input: ' asdfsfaf   ', groups: undefined ]