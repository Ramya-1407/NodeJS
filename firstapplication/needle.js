var nd=require("needle")
var url='https://jsonplaceholder.typicode.com/todos/1';
nd.get(url,(error,respone,body)=>{
    if(error)
    //printing the error if occured
        console.log(error)
        //printing status code
    console.log(respone.statusCode)//output:200
    //printing body
    console.log(body)
})