const request = require("request");

const forecast = (latitude,longitude,callback) =>{

    const url = `https://api.darksky.net/forecast/d375c9bfe82f06660d05faac6f12d15b/${latitude},${longitude}`;

    request({url,json:true},(error,{body})=>{

        if(error)
        {
           callback('Unable to connect to the internet',undefined); 
        }
        else if(body.error)
        {
            callback('Invalid name please retry',undefined);
        }
        else{
            callback(undefined,{
                summary:body.daily.data[0].summary,
                temperature:body.currently.temperature,
                probability:body.currently.precipProbability
            })
        }
    })

}


module.exports = forecast;