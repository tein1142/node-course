const express = require('express')
const path = require('path')


const app = express()
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Pantavit'

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
        helpText: 'This page can help your problem'
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