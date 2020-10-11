let a = 0;
//递归
function fib(n) {
    if (n < 2) {
        return n
    } else {
        console.log(a++)
        return fib(n - 1) + fib(n - 2)
    }
}

fib(10)

//动态规划
function dfib(n) {
    let result = [];
    for (let j = 0; j < n.length; j++) {
        result.push(1);
    }    ;
    for (let i = 0; i < n.length; i++) {
        if (i < 2) result[i]=1;
        else {
            //使用状态方程，同时复用以往的结果
            result[i]=result[i-1]+result[i-2]
        }
        return result[-1]
    }
}