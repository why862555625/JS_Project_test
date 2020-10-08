// 输入：“get1_install2_app3_list4_by5_android6”（每个单词后面总会携带一个数字，只有偶数才删掉），我不用循环只用正则怎么实现输出"get1InstallApp3ListBy5Android"


let a = 'get1_install2_app3_list4_by5_android6'
// let b = a.replace(/((?<=[a-zA-Z])[02468][_]*[a-zA-Z]{0,1})|((?<=[a-zA-Z][13579])[_]*[a-zA-Z]{0,1})/g,  function(x) {return x.length>1 ? x.toUpperCase().slice(x.length-1): ''})
// console.log(b)
b=a.replace(/?=[_]/)