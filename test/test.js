function a(array) {
    args = string1.split(' ');
    args2 = string2.split(' ');
    args = args.map(function (i) {
        return i - 0
    });
    args2 = args2.map(function (j) {
        return j - 0
    })
    n = args[0];
    m = args[1];
    a = args[2];
    b = args[3];
    dlist = [args2];
    result = {a: 0, b: 0, num: 2};
    num1 = n - m;
    dlist.forEach(
        function (i) {
            if (i == a) {
                if (result.a = 0) {
                    result.a = 1;
                    result.num = result.num - 1
                }
            }
            ;
            if (i == b) {
                if (result.b = 0) {
                    result.b = 1;
                    result.num = result.num - 1
                }
            }
        }
    )
    if (num1 >= result.num) {
        return 'yes'
    } else {
        return 'no'
    }
}

b = a('4 2 2 4', '3 3');
console.log(b)