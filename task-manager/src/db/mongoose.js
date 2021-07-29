const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// how to create set table and save that value.
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase() === 'password') {
                throw Error('Try again to strong password')
            }
        },
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value <= 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})

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



const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true,

    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '  learn node js',

})

task.save().then(() => {
    console.log(task)
}).catch((err) => {
    console.log('Error' + err)
})