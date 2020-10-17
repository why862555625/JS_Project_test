
url = readline();
function parseQueryString(url) {
    if (url == '') {
        url = window.location.href
    }
    let obj1 = {}
    let b = url.split('?')
    if (b.length != 1) {
        let c = b[1].split('&')
        c.forEach(function (i) {
            let d = i.split('=')
            if (d.length>  1) {
                a1 = d[0]
                a2 = d[1]
                obj1[a1] = a2
            } else {
              a1=d[0]
                a2=''
                obj1[a1]=a2
            }
        })
    }
    obj1 = JSON.stringify(obj1)
    return obj1
}
console.log(parseQueryString(url))


