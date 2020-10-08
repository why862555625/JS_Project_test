var arr = [1, [1], 2, 3, [2, 3, 4, [ 2, 3, 4, [1]]]];

arrb=arr.join('');
arrb=arrb.replace(/,/g,'');
arrb=[...arrb].map(function (item) {
   return  parseInt(item)
})
console.log(arrb)