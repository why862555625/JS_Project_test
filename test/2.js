const hdcms = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("第一个Promise");
    }, 1000);
});
const houdunren = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("第二个异步");
    }, 1000);
});
const hd = Promise.all([hdcms, houdunren])
    .then(results => {
        console.log(results);
    })
    .catch(msg => {
        console.log(msg);
    });
