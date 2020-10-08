var str="xi nAn shi you xUe yuan china people"
console.log(str.replace(/\s[a-z]/g,function($1){return $1.toLocaleUpperCase()}).replace(/^[a-z]/,function($1){return $1.toLocaleUpperCase()}))