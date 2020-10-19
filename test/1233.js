class myPromise {
    static  PENDING='pending'
    static  FULFILLED='fulfiilled'
    static  REJECT='reject'
    constructor(executor) {
        this.status=myPromise.PENDING
        this.value=null
        executor(this.resolve.call(this),this.reject.call(this));
        }
        resolve(){
        if (this.status==myPromise.PENDING){
            try {
                this.status=myPromise.FUFILLED
            }catch (e) {
                this.status=this.reject(e)
            }
        }
        }
        reject(){
        try {
            this.status==myPromise.REJECTED
        }catch (e) {

        }


        }
}