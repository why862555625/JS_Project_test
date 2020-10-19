const p1 = new Promise((resolve, reject) => {
    resolve(
        //p2
        new Promise((s, e) => {
            s("成功");
        })
    );
}).then(msg => {
    console.log(msg);
});
