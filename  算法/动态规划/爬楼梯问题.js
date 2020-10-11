function dpa(n) {
    for (let i = 0; i < n.length ; i++) {
        let b = undefined;
        result.push(b);
    }
    for (let i=0;i<n.length;i++){
        if (i<3) {
            result[i]=i
        }else {
            result[i]=result[i-1]+result[i-2]
        }
    }
    return result

}