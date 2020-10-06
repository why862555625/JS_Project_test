// 编译
class Compiler {
    constructor(el, vm) {
        //判断el属性是不是一个元素，如果不是元素那就获取她
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        //把当前节点中的元素获取到 ，然后放到内存中
        this.vm = vm;
        let fragment = this.node2Fragment(this.el);
        //把节点中的内容进行替换
        //编译模板，用数据编译
        this.compiler(fragment);
        //把内容塞到页面中
        this.el.appendChild(fragment);
        console.log(this)
    }

    //查询是否带有指令，比如v-model
    isDirective(attrName) {
        return attrName.startsWith('v-')

    }

    //编译元素的
    compileElement(node) {
        let attrabutes = node.attributes;
        [...attrabutes].forEach(attr => {
            let {name, value: expr} = attr;
            if (this.isDirective(name)) {
                let [, directive] = name.split('-');
                // 不同的指令 需要调用不同的指令函数来处理，需要有处理的节点，绑定的数据名称 和 数据
                CompilerUtil[directive](node, expr, this.vm);
            }
        })
    }

    //编译文本，判断是否有{{}}
    compileText(node) {
        let content = node.textContent;
        if (/\{\{(.+?)\}\}/.test(content)) {
            CompilerUtil['text'](node, content, this.vm)
        }
    }


    //编译内存中的dom节点
    compiler(node) {
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
                this.compileElement(child)
                //如果是元素的话  需要把自己传进去 再去遍历子节点
                this.compiler(child)
            } else {
                this.compileText(child)
            }
        })
    }

    //把节点放到内存
    node2Fragment(node) {
        //创建一个虚拟几点对象
        let fragment = document.createDocumentFragment();
        let fristChild;
        while (fristChild = node.firstChild) {
            fragment.appendChild(fristChild);
        }
        return fragment
    }

    // 判断是否为节点
    isElementNode(node) {
        return node.nodeType === 1;
    }
}


CompilerUtil = {
    // 取值的方法
    getValue(vm, expr) {//vm.$data  'school.name'   [school,name]
        return expr.split('.').reduce(
            (data, current) => {
                return data[current]
            }, vm.$data)
    },
    model(node, expr, vm) {
        //给输入框富裕value属性 node.value=xx
        let fn = this.updater['modelUpdater'];

        new Watcher(vm, expr, newVal => {//给输入框加一个观察者，如果数据更新了会触发此方法，会拿新值给输入框赋予值
            fn(node, newVal)
        })
        let value = this.getValue(vm, expr);
        fn(node, value);
    },
    html() {

    },
    getContentValue(vm, expr) {
        //遍历表达式，将内容重新替换成一个完整的内容 返回回去
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getValue(vm,args[1])
        })
    },
    text(node, expr, vm) {//expr=>{{a}} {{b}}
        let fn = this.updater['textUpdater'];
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            //给每个都加上观察者
            new Watcher(vm, args[1], () => {
                fn(node, this.getContentValue(vm, expr))
            })
            return this.getValue(vm, args[1]);
        });
        fn(node, content)
    },
    // 更新方法
    updater: {
        //把数据插入到节点中
        modelUpdater(node, value) {
            node.value = value;
        },
        htmlUpdater() {

        },
        textUpdater(node, value) {
            node.textContent = value;
        }
    }
}


//实现数据劫持功能
class Observer {
    constructor(data) {
        this.observer(data);
    };

    observer(data) {
        //如果是对象才观察
        if (data && typeof data == 'object') {
            for (let key in data) {
                let b = this.defineReactive(data, key, data[key]);
            }
        }
    };

    defineReactive(obj, key, value) {
        this.observer(value);
        Object.defineProperty(obj, key, {
            get() {
                return value;
            },
            set: (newVal) => {
                if (value != newVal) {
                    this.observer(newVal)
                    value = newVal;
                }
            },

        })
    }
}

class Dep {
    constructor() {
        this.subs = [];
    };

    addSub(watcher) {
        this.subs.push(watcher);
    };

    // 发布
    notify() {
        this.subs.forEach(watcher => watcher.updata())
    }

}


class Watcher {
    //cb是回调函数
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        //默认先存放一个老值
        this.oldValue = this.get();
    };

    get() {
        let value = CompilerUtil.getValue(this.vm, this.expr);
        return value
    };

    //更新操作数据变化之后会调用观察者的updata方法
    updata() {
        let newVal = CompilerUtil.getValue(this.vm, this.expr);
        if (newVal !== this.oldValue) {
            this.cb(newVal)
        }
    }


}


//基类


class Vue {
    constructor(option) {
        //this.$el
        this.$el = option.el;
        this.$data = option.data;
        // 如果这个根元素存在，编译模板
        if (this.$el) {
            //把数据全部转化成用object.defineProperty来定义

            new Observer(this.$data);
            console.log(this.$data);
            new Compiler(this.$el, this);

        }

    }
}