const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoibWFsa2VldDc4NiIsImEiOiJja2tpZTRzbW8xbzNnMnBxdTU0MTJsN2ZuIn0.8BtG_EJ7W2XpyijInGNuog';

    request({url:url , json:true},(error,response)=>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode