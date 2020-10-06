
// 转化geter和setter
class observ {
    constructor() {
    }
}






//要创建一个Vue的类
class QVue {
    constructor(options){
        //  缓存options对象数据
        this.$options = options;
        //  取出data数据，做数据响应
        this.$data = options.data || {};
    }
}