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

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function() {
//     console.log(this)
//     return this
// }
// console.log(JSON.stringify(pet))

const Task = require('./models/task')
const User = require('./models/user')

// const main = async() => {
//     // const task = await Task.findById('610a8c18094f7b155c9c0c34')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     const user = await User.findById('6107b5416a940d4e5064d771')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()