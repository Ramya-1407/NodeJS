// Include request Module
var nd=require("needle")
exports.getWeatherInfo=function(location,callbackfunc){
	var url="http://api.weatherstack.com/current?access_key=e83f52d59377145e9454f86a580acd02&query="+location
	nd.get(url,(error,response,body)=>{
			if(error)
			//printing the error if occured
				callbackfunc(error,null)
			else{
					//var jsonobj={longitude:body.location.lon,latitude:body.location.lat}
					callbackfunc(null,body.current.temperature)
			}
			})
    

/* Call request function by sending url
 		Implement following steps in the callback request function:
 			Step 1: if error occurred, then call callbackfunc by sending arguments error and null.
 			Step 2 : otherwise call callbackfunc with null and response.body.current.temperature.
*/


 }
//After request function, Store getWeatherInfo function into module.exports.getWeatherInfo


