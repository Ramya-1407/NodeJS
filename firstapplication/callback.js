//Ananymous function->function with function name
function verifylogin(user,pwd,callback){
    if(pwd=="pwd1"){
        callback(null,"correct login")
    }
    else{
        callback("Incorrect login",null)
    }
}


verifylogin("user1","pwd2",function(err,result){
    if(err){
        console.log(err)
    }
    else{
        console.log(result)
    }
})
