const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// how to create set table and save that value.


// const me = new User({
//     name: '  sine',
//     age: 28,
//     email: '  Sine.925@hotmail.com',
//     password: 'sine.925'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error' + error)
// })