const express = require('express')
const path = require('path')
const app = express()

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const publicDirectoryPath = path.join(__dirname, '../public')
const aboutPage = path.join(__dirname,'../public/About')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello express!')
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