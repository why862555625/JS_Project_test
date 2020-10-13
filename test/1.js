// let num1 = readline();
// let num2 =  readline();

function maxn(num1, num2) {

    //小于50一小一大排序
    let num11 = num1.split(' ');
    let numaa = num2.split(' ')
    let n = num11[0] - 0;
    let p = num11[1] - 0;
    if (n==0){return n}
    numaa = numaa.map(function (i) {
        return parseInt(i)
    })
    numaa = numaa.sort((a, b) => {
        return a - b
    })

    let rec = [];
    let  result = [];
    if (p >=50) {
        for (let i = 0; i < n; i++) {
            rec = [numaa[i],numaa[2n - i]];
            result.push(rec)
        }
    } else {
        let m=0;
        numaa.reduce(
            function (pre,item) {
               if (m%2==0){
                   result.push([pre,item])
               }
               m++
               return pre=item
            }
        )
    }
    let  aaa=result.reduce(function (pre,item) {
        let  dec=item[0]*((100-p)/100)+item[1]*(p/100)
        pre=dec+pre
        return pre
    },0);
    results=Math.floor(aaa*100)/100
    if (results-parseInt(results)==0){
        return results
    }else {
        let mmm=results*100
        return mmm+'%'
    }
}

console.log(maxn('1 20', '1 2'))