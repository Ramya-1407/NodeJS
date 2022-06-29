

var nd=require("needle")
var url="http://api.weatherstack.com/current?access_key=e83f52d59377145e9454f86a580acd02&query='Ongole'"
nd.get(url,(error,response,body)=>{
    if(error)
        console.log(error)
    else{
        console.log(body.current.temperature)
        console.log(body.location.lat)
        console.log(body.location.lon)
        var des=body.current.weather_descriptions
        for(ele in des)
            console.log(des[ele])
    }
})