let a='1231{3213}21321{3}2'
let rex=/(?<=\{)(\d+)(?=\})/g
c=a.match(rex)
b=a.replace(rex,'asd')
