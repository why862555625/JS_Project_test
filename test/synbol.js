

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);


let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference)