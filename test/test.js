let name1='a'
b={
    name1:'aa',
    say:()=>{
        console.log(this.name1)
        console.log(this)
    }
}

b.say()