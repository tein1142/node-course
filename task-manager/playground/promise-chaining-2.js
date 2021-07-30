require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6102a868b31f7939d0548b8e').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

//challenge Use Async/Await 

const deleteTask = async(id) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const countIncompleteTask = await Task.countDocuments({ completed: false })
    return countIncompleteTask
}

deleteTask('6103f4853832591b04956460').then((count) => {
    console.log(count)
}).catch(e => {
    console.log(e)
})