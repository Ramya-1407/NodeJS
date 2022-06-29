var fs=require('fs')
fs.readFile("./result.txt", function(err,data) {
    if(err)
        console.log("Invalid data")
    else{
    obj = JSON.parse(data.toString());
    console.log(obj);
    for(ele in obj)
    //console.log(ele)
    console.log(ele+":"+obj[ele])
    }
});