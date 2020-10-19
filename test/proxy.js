var objCopy = new Proxy(obj,{
    get:function(target,key){
        if(key=='name'){
            return target[key].replace(/san/,'先生');
        }
    },
    set:function(target,key,value){
        if(key == 'name'){
            value=='lisi'?target[key]:target[key] = value;
        }else{
            target[key] = value;
        }
    }
})