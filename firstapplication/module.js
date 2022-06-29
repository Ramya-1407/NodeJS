// var fs=require('fs')

// fs.readFile("./text.txt",function(err,data){
//     if(err)
//         console.log("Error in reading the file")
//     else
//         console.log(data.toString())
// })
 var os=require('os')
console.log(os.hostname())
console.log(os.homedir())
console.log(os.getPriority())
console.log(os.loadavg())
console.log(os.release())