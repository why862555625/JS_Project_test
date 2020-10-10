class Promise {
    //这个callback也就是我们传递的函数
    constructor (fn) {
        this.value = ''
        this.resolveFn = null
        this.rejectFn = null
        try {
            fn.call(this, this.resolve.bind(this), this.reject.bind(this))
        } catch (e) {
            this.reject.call(this, e)
        }
    }

    resolve (value) {
        this.value = value
        setTimeout(() => {
            this.resolveFn && this.resolveFn.call(this, value)
            return this
        }, 0)
    }

    reject (value) {
        this.value = value
        setTimeout(() => {
            console.log(this)
            this.rejectFn && this.rejectFn.call(this, value)
            return this
        }, 0)
    }

    then (onFullfilled, onRejected) {
        this.resolveFn = onFullfilled
        this.rejectFn = onRejected
        return this
    }
}

var fn = new Promise((resolve, reject) => {
    console.log(111)
    resolve(333)
    console.log(222)
})

fn.then((val) => {
    console.log(val)
}, (e) => {
    console.log(e)
})

// 111
// 222
// 333