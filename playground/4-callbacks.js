// setTimeout(() => {
//     console.log('Three seconds are up')
//     // console.log(shortNames)
// }, 3000)

// const names = ['Tien', 'Nam', 'JJ']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//             address: address
//         }
//         callback(data)
//     }, 2000)

// }

// geocode('Bangkok', (data) => {
// console.log(data)
// })



// const add = (number1,number2,callback) => {
//     setTimeout(() => {
//         callback(number1 + number2)
//     }, 2000)

// }
// add(1, 4, (sum) => {
//     console.log(sum)
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        //callback('This is my error', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})