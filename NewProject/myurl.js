// var nd=require("needle")
// var url="https://api.themoviedb.org/3/movie/top_rated?api_key=281c6196bbbfd2d514c9667a6c174c96&language=en-US&page=1"
// nd.get(url,(error,response,body)=>{
//     if(error)
//         console.log(error)
//     else{
//         var results=body.results
//         for(ele in results)
//             console.log(results[ele].title)
//     }
// })
var nd=require("needle")
var url="https://api.mapbox.com/geocoding/v5/mapbox.places/San%20Francisco.json?access_token=pk.eyJ1IjoicmVzaG1hbmF3YXoiLCJhIjoiY2wzbzB1NGRhMGg4ZDNrcWh5amxmeTNvciJ9.zRI4phAm-KVaVlrDz4VOLQ"
nd.get(url,(error,response,body)=>{
    if(error)
        console.log(error)
    else{
        console.log(JSON.parse(body))
    }
})