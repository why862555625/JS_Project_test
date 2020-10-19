function promiseAll(promises){
    return new Promise(function(resolve,reject){
        if(!Array.isArray(promises)){
            return reject(new TypeError("argument must be anarray"))
        }
        var countNum=0;
        var promiseNum=promises.length;
        var resolvedvalue=new Array(promiseNum);
        for(var i=0;i<promiseNum;i++){
            (function(i){
             
                Promise.resolve(promises[i]).then(function(value){
                    countNum++;
                    resolvedvalue[i]=value;
                    if(countNum===promiseNum){
                        return resolve(resolvedvalue)
                    }
                },function(reason){
                    return reject(reason)
                })

            })(i)
        }
    })
}

var p1=Promise.resolve(1),
    p2=Promise.resolve(2),
    p3=Promise.resolve(3);

promiseAll([p1,p2,p3]).then(function(value){
    console.log(value)

})