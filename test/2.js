function a(string1, string2) {
    args1 = string1.split(' ');
    args2 = string2.split(' ');
    x = parseInt(args1[1]);
    args2 = args2.map(function (i) {
        return   itrm = i - 0;
    });
    len=args2.length
    for (let j=0;j<args2.length;j++){
        if (args2[len-1]==0){
            return 0
        }

        if (args2[len-x]!=0){
            return x
        }else {
            x=x-1
        }
    }
}
console.log(a("5 4",
"0 0 2 3 4"))