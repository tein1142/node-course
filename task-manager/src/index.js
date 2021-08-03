const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method) {
//         res.status(503).send('API is under maintenance')
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const e = require('express')

const myFunction = async() => {
    const token = jwt.sign({ _id: 'tein1142' }, 'thisismynewcourse', { expiresIn: '2 seconds' })
        // console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
        // console.log(data)
}

myFunction()