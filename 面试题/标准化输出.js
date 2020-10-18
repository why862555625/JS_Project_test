function transformTozTreeFormat(sNodes) {
    let res = [];
    sNodes.sort((a, b) => a.id.length - b.id.length);
    for (let i = 0; i < sNodes.length; i++) {
        let cur = sNodes[i];
        if (cur.id.length == 1) {
            res.push(cur);
        } else {
            let ids = cur.id.split('-');
            for (let j = 0; j < res.length; j++) {
                if (res[j].id == ids[0]) {
                    if (!res[j].children) {
                        res[j].children = [];
                    }
                    res[j].children.push(cur);
                }
            }
        }
    }
    return res;
}

let sNodes = [ {id:"1-1",pid:1,name:'第一节'}, {id:"1",pid:0, name:'第一章'}, {id:"2-1",pid:2,name:'第一节'}, {id:"2",pid:0, name:'第二章'} ];
let res = transformTozTreeFormat(sNodes);
console.log(res);