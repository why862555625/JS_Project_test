// all的原理
Promise.all = function(values){
    return new Promise((resolve,reject)=>{
        let results = []; // 结果数组
        let i = 0;
        let processData = (value,index)=>{
            results[index] = value;
            // 当成功的个数 和 当前的参数个数相等就把结果抛出去
            if(++i === values.length){
                resolve(results);
            }
        }
        for(let i = 0 ; i< values.length;i++){
            let current = values[i]; // 拿到数组中每一项
            // 判断是不是一个promise
            if((typeof current === 'object' &&  current !==null)|| typeof current == 'function'){
                // 如果是promise
                if(typeof current.then == 'function'){
                    // 就调用这个promise的then方法，把结果和索引对应上,如果任何一个失败了返回的proimise就是一个失败的promise
                    current.then(y=>{
                        processData(y,i);
                    },reject)
                }else{
                    processData(current,i);
                }
            }else{
                processData(current,i);
            }
        }
    });
}