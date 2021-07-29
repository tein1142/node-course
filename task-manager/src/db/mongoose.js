const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// how to create set table and save that value.
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Nam',
//     age: 21
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Error' + err)
// })