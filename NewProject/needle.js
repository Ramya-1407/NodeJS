var nd=require("needle")
var url='https://jsonplaceholder.typicode.com/todos/1';
nd.get(url,(error,response,body)=>{
    if(error)
    //printing the error if occured
        console.log(error)
        //printing status code
    
    console.log(response.statusCode)//output:200
    //printing body
    console.log(body)
})