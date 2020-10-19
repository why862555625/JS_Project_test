class myPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";

    constructor(executor) {
        this.status = myPromise.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }

    resolve(value) {
        if (this.status == myPromise.PENDING) {
            this.status = myPromise.FULFILLED;
            this.value = value;
        }
        setTimeout(() => {
            this.callbacks.map(callback => {
                callback.onFulfilled(value);
            });
        })
    }

    reject(value) {
        if (this.status == myPromise.PENDING) {
            this.status = myPromise.REJECTED;
            this.value = value;
        }
        setTimeout(() => {
            this.callbacks.map(callback => {
                callback.onRejected(value);
            });
        })
    }
    //想要链式then就必须要求返回的结果也是一个promise

    then(onFulfilled, onRejected) {
        if (typeof onFulfilled != "function") {
            onFulfilled = value => value;
        }
        if (typeof onRejected != "function") {
            onRejected = value => value;
        }
        return new myPromise((resolve, reject) => {
            if (this.status == myPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled: value => {
                        try {
                            let result = onFulfilled(value);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    },
                    onRejected: value => {
                        try {
                            let result = onRejected(value);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    }
                });
            }
            if (this.status == myPromise.FULFILLED) {
                setTimeout(() => {
                    try {
                        let result = onFulfilled(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
            if (this.status == myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        let result = onRejected(this.value);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        });
    }

}

