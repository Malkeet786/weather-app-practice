const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=06ca22565a38202a23225b80ccd1029a&query='+ latitude +','+ longitude+'&units=f';
    request({url:url,json:true}, (error,response)=>{
        if(error){
            callback('Not Connected')
        }else if(response.body.error){
            callback('Unable to find Location',undefined)
        }else{
            callback(undefined , response.body.current.weather_descriptions + " There is " + response.body.current.temperature + " Tempterature");
        }
    })
}

module.exports=forecast