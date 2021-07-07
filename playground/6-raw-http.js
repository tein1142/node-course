const https = require('http')
const url = `http://api.weatherstack.com/current?access_key=97d8e8759f7adc753c01e763dffb3afd&query=45,-75&units=f`

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
        
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=> {
    console.log('An error',error)
})

request.end()