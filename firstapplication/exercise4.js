function validUser(username,password,callback){
    if(password=="2002"){
        callback(null,"correct login")
    }
    else{
        callback("Incorrect login",null)
    }
}
validUser("Reshma","2002",(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})
