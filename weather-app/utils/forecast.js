const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherAPI = `http://api.weatherstack.com/current?access_key=97d8e8759f7adc753c01e763dffb3afd&query=${latitude},${longitude}`
    request({
        url: weatherAPI,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} celsius. There is a ${response.body.current.precip+'%'} chance of rain`)
        }
    })
}

module.exports = forecast