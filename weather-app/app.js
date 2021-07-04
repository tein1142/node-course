const request = require('request')
const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




geocode.geocode('Bangkok', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(13.736717, 100.523186, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })