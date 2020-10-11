prise=new  Promise((resolve,reject)=>{
    reject('111')
})
prise.then((result)=>{
    console.log(result)
})