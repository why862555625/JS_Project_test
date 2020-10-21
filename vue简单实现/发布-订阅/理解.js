class StateTracker {
    constructor() {
        this.observers = []; // 观察者列表
        this.internalState = 10;
    }
    //改变内部状态，触发状态的观察者列表
    change(val) {
        this.internalState = val;
        this.observers.forEach(observer => observer(val));
    }
    //注册观察者
    registerObserver(ObserverFn) {
        this.observers.push(ObserverFn);
    }
}

let obj = new StateTracker();

let fn = arg => {
    // ......
    console.log("fn:" + arg);
};

let fn2 = arg => {
    // ......
    console.log("fn2:" + arg);
};

obj.registerObserver(fn); // 注册
obj.registerObserver(fn2);

console.log(obj.observers); // 注册后的列表[ [Function: fn], [Function: fn2] ]
console.log("1:" + obj.internalState); // 注册后的状态值  10

obj.change(5); // 改变状态值并触发观察者列表   fn:5  fn2:5

console.log("2:" + obj.internalState); // 改变后的状态值  5
