var calc=require('./calc')
console.log(calc.add(1,2))
console.log(calc.sub(2,1))
console.log(calc.mul(2,5))
calc.div(12,2,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})
calc.div(12,0,(err,result)=>{
    if(err)
        console.log(err)
    else
        console.log(result)
})