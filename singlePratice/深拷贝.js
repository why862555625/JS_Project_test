arry=[[1,2,3,[4,5,[6,7,[8,9]]]]];
// arry2=JSON.parse(JSON.stringify(arry));

function deepcopy(object) {
if (typeof object!='object'){
    return object
}
let  copyobject=object instanceof Array?[]:{};
for (key in object){
    if (object.hasOwnProperty(object[key]||typeof object[key]=='object')){
copyobject[key]=deepcopy(object[key])
    }else {
     return    copyobject[key]=object[key]
    }
}

}
// console.log(deepcopy(arry2))
console.log(deepcopy(arry))