function dpath(m, n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(mn);
        for (let j = 0; j < n; j++) {
            mn=[];
            mn.push(1);
        }
    };
    result.shift();
    for (let i; i < m; i++) {
        for (let j; j < n; j++) {
            result[i][j]=result[i-1][j]+result[i][j-1]
        }
    }
    return result[-1][-1]
}