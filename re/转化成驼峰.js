var str = "get-element-by-id";
var reg = /-\w/g; // 匹配横杆以及之后的一个字符，全局匹配
console.log(str.match(reg))
console.log(str.replace(reg,function($0){
    return $0.slice(1).toUpperCase();
    // 匹配到到是-e -b -i 形式截取后一个字符转成大写
}));