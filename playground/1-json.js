const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// console.log(bookJson)

// const parseData = JSON.parse(bookJson)
// console.log(parseData.author)

// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)
// const data = JSON.parse(dataJSON)
// console.log(data.title)\

//Challenge

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const myInfo = JSON.parse(dataJson)

myInfo.name = 'Pantavit'
myInfo.planet = 'Sun'
myInfo.age = '20'

const user = JSON.stringify(myInfo)
// const userData = JSON.parse(user)
fs.writeFileSync('1-json.json', user)

// เรียนถึงตอนที่ 18
