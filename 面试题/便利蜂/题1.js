function maxNumOfCustomer(strings){
    function ainb(a,b){
        c=false
        b.forEach((i)=>{
            if (i==a){
                c=true
            }
        })
    return c
    }
   let result1=strings.split('|')
    result2=[]
    timer=[]

    result1.forEach(function (i) {
           let m=i.split(',')
            timer.push(m[2])
            result2.push(m)
    })
    timer=Array.from(new Set(timer))
    result=new Array(timer.length)

    itm=0;
  //时间戳   result2所有结果
    timer.forEach(function (i) {
        cf=[];
        sum=0;
        result2.forEach(function (j) {
            if (i==j[2]&&!ainb(j[0],cf)){
                cf.push(j[0])
                sum++
            }
        });
        result[itm]=[sum]
        itm++
    })
    return Math.max.call(result)
}
maxNumOfCustomer('72229,in,20931|72229,in,20931|72229,in,20931|21257,out,68387|21257,out,68387|21257,in,68387|66362,in,31725|66362,in,31725|66362,in,3172')