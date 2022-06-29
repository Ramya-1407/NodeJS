// Include ./utils/geoloc
//Include ./utils/weatherinfo
var geoloc=require("./utils/geoloc")
var weatherinfo=require("./utils/weatherinfo")

/* Understand and test the following code by uncommenting it. You can observe the following:
  First it will print geolocation of given town. 
  If the geolocation of the town is found then it will display the current temperature of it.
*/
geoloc.geoloc("Bhimavaram",function(error,locjson){
    if(error){
        console.log(error)
    }
    else{
        console.log("Bhimavaram Longitude:"+locjson.longitude+" Latitude:"+locjson.latitude)
        
    }
})

weatherinfo.getWeatherInfo("Bhimavaram",function(error,temperatureinfo){
            if(error){
                console.log(error)
            }
            else{
                console.log("Current Temperature in Bhimavaram:"+temperatureinfo)
            }
        
        })


//Test the following Case and observe the output.
// CASE 1:Copy and Paste the above code to test with another valid city and observe the output.

// CASE 2:Copy and Paste the above code to test with invalid city value and observe the output.



