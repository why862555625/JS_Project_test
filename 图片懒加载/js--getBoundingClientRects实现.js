// JS---方法一: getBoundingClientRect

let imgList1 = [...document.querySelectAll("img")]
let num = imgList1.length

let lozyload1 = (()=>{
    let count = 0
    return function(){
        let newArr = []
        imgList1.forEach((item, index)=>{
            let Rect =  item.getBoundingClientRect()
            if(Rect.top < window.innerHeight){
                Rect.src = Rect.dataset.src
                newArr.push(index)
                count ++
                if(count === num ){
                    document.removeEventListener("srcoll" , lozyload1)
                }
            }
        })
        //删除已加载完毕的图片
        imgList1 = imgList1.filter((_ , index)=> !newArr.includes(index))
    }
})()
// 这里调用了throttle 的节流函数
lozyload1 = proxy(lozyload1 , 100)
document.addEventListen("srcoll" , lozyload1)
// 手动执行一次，加载首屏图片
lozyload1()