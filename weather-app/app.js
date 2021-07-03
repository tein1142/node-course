const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
// const weatherAPI = 'http://api.weatherstack.com/current?access_key=97d8e8759f7adc753c01e763dffb3afd&query=13.7406803,100.4862916&units=m'

// request({url: weatherAPI, json: true},(error,respose)=> {
//     if(error){
//         console.log('Unable to connect to weather service')
//     } else if(respose.body.error){
//         console.log('Unable to find location')
//     } 
//     else{
//     console.log(`${respose.body.current.weather_descriptions[0]}. It is currently ${chalk.bgBlue.inverse(respose.body.current.temperature)} celsius. There is a ${chalk.bgBlue.inverse(respose.body.current.precip+'%')} chance of rain`)
//     }
// })

// Geocoding
// const mapBoxAPI = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVpbjExNDIiLCJhIjoiY2txa3Qyczh6MDJ6MzJ1cGx2NzRlNmR1YSJ9.yIDLTZ2-013BGUtLlPTlLw'
// request({
//     url: mapBoxAPI,
//     json: true
// }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect Mapbox service')
//     } else if (response.body.features.length = []) {
//         console.log('Unable to find this place')
//     } else {
//         const longitude = chalk.bgCyan(response.body.features[0].bbox[0])
//         const latitude = chalk.bgCyan(response.body.features[0].bbox[1])
//         console.log(longitude)
//         console.log(latitude)
//     }

// })

geocode.geocode('Bangkok', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})