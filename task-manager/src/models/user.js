const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Task = require('./task')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
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
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generrateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user.id.toString() }, 'thisismynewcourse')
    user.tokens.push({ token })
    await user.save()
    return token
}

userSchema.methods.deleteAuthToken = async function() {
    const user = this
    user.tokens.pop({})
    await user.save()
}

userSchema.statics.findByCredentials = async(email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

//Delete user tasks when user removed
userSchema.pre('remove', async function(next) {
    const user = this
    await Task.deleteMany({ owner: user._id })
    console.log(user.id)
    next()
})


const User = mongoose.model('User', userSchema)

module.exports = User