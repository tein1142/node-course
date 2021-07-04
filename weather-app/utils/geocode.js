const request = require('request')

const geocode = (address, callback) => {
    const mapBoxAPI = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidGVpbjExNDIiLCJhIjoiY2txa3Qyczh6MDJ6MzJ1cGx2NzRlNmR1YSJ9.yIDLTZ2-013BGUtLlPTlLw`
    request({
        url: mapBoxAPI,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect location service!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
 