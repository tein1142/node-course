require('../src/db/mongoose')
const User = require('../src/models/user')
    //61028d72f7534814d42db2e5

// User.findByIdAndUpdate('6102b8f7972802220cb574e7', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAcount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAcount('61028e043c152d26987d65b0', 21).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})