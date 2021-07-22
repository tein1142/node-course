const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

//define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join (__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
console.log(partialsPath)

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Pantavit Hangnalen'

    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Pantavit Hangnalen'
    })
})

app.get('/help', (req, res) => {
    res.render('help' ,{
        helpText: 'This page can help your problem',
        title:'Help',
        name: 'Pantavit hangnalen'
    })
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is hot',
        location: 'Bangkok'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});