let a='ads_adfs_afas_fg';
re=/_[a-zA-Z]{1}/g
b=a.replace(re,function (item) {
    c=item.replace('_','');
return c.toUpperCase()
})
console.log(b)

ab='AasdSsadDasAdSsadFasdF';
rea=/[A-Z]{1}/g
abc=ab.replace(rea,function (item) {
return  '_'+ item.toLowerCase()
});
console.log(abc)