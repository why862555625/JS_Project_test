// 方法二：----intersectionObserver

let imgList2 = [ ...document.querySelectAll("img") ]

let lozyload2 = (()=>{
    // 实例化observer
    let observer = new IntersectionObserver( entries =>{
        // entries 存储着所有观察元素的intersectionObserverEntry 配置
        entries.forEach(entry=>{
            if(entry.intersectionRatio > 0 ){
                entry.target.src = entry.target.dataset.src
                //取消观察
                observer.unobserve(entry.target)
            }
        })
    })

    imgList2.forEach(img=>{
        observer.observe(img)
    })
})

lozyload2()