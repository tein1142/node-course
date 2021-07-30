// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve([7, 44, 1])
//         reject('Things went wrong!')

//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log('Success', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const evenNumber = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve(num + ' is even number')
//         } else {
//             reject(new Error(num + ' is not even number'))
//         }
//     })
// }


//remember that .then is "resolve" and .catch is "reject"

// evenNumber(347).then((even) => {
//     console.log(even)
// }).catch((err) => {
//     console.log(err.toString())
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// Promise Chaining
// add(1, 2).then((result) => {
//     console.log(result)

//     add(result, 5).then((result2) => {
//         console.log(result2)
//     }).catch(e => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch(e => {
    console.log(e)
})