let num = 8;
let array1 = [2, 2, 6, 5, 4]
let array2 = [6, 3, 5, 4, 6]

function bag(num, obj1, obj2) {
    let result = [];
    for (let i = 0; i < num + 1; i++) {
        let b = [];
        result.push(b);
        for (let j = 0; j < obj1.length; j++) {
            b.push(0)
        }
    }
    ;
    result.shift()
    for (let i = 1; i < obj1.length + 1; i++) {
        for (let j = 0; j < n; j++) {
            if (i < array1[j]) {
                result[i][j] = result[i - 1][j]
            } else {
                result[i][j] = Math.max(result[i - 1][i - array2[j]], result[i - 1][j])
            }
        }
    }
    return result
}