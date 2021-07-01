const request = require('request')
const chalk = require('chalk')

const urlAPI = 'http://api.weatherstack.com/current?access_key=97d8e8759f7adc753c01e763dffb3afd&query=13.7406803,100.4862916&units=m'

request({url: urlAPI, json: true},(error,respose)=> {
    //    console.log(respose.body)     
    console.log(`${respose.body.current.weather_descriptions[0]}. It is currently ${chalk.bgBlue.inverse(respose.body.current.temperature)} celsius. There is a ${chalk.bgBlue.inverse(respose.body.current.precip+'%')} chance of rain`)
})