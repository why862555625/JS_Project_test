// 1.实现二叉查找树
//
// 首先定义一个Node节点类：

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}


// 接着定义一个二叉查找树的插入元素的方法，插入的时候把值小的放在树节点的左侧，较大的放在右侧


function insert(data) {
    var n = new Node(data, null, null);
    if (!this.root) {
        this.root = n;
    } else {
        var current = this.root, parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (!current) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}















