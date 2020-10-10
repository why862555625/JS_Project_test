class myPromise {
    constructor(callback) {
        this.msg = ""
        this.success = null
        this.fail = null
        //这个callback也就是我们传递的函数
        callback(
            // success为第一个函数传的参数
            success => {
                console.log('1',success)
                // 成功 success对应res()传递的参数
                this.msg = "SUCCESS"
                this.success = success
            },
            fail => {
                // 失败 success对应rej()传递的参数
                this.msg = "FAIL"
                this.fail = fail
            }
        )
    }
    then(fn) {
        if (this.msg === "SUCCESS") {
            fn(this.success)

        }
        if (this.msg === "FAIL") {
            fn(this.fail)
        }
    }
}



new myPromise((res, rej) => {
    rej("hello")
}).then(data => {

    console.log(data)
})