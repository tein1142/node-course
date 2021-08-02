const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async(req, res) => {
    try {
        const task = await new Task(req.body)
        task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get(`/allTasks`, async(req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/getTaskById/:id', async(req, res) => {
    const id = req.params.id
    try {
        const taskById = await Task.findById(id)
        if (!taskById) {
            new Error(res.status(404).send('Not found task with id: ' + id))
        }
        res.send(taskById)
    } catch (e) {
        res.send(e)
    }

    // Task.findById(id).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.send(e)
    // })
})

router.patch('/editTask/:id', async(req, res) => {
    const keyInput = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidUpdate = keyInput.every((key) => {
        return allowedUpdates.includes(key)
    })
    if (!isValidUpdate) {
        return res.status(400).send("key or value went wrong!")
    }
    try {
        const id = req.params.id
        const task = await Task.findById(id)

        keyInput.forEach((key) => {
            task[key] = req.body[key]
        })
        task.save()
            // const updated = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status('404').send("Not found id: " + id)
        }

        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/deleteTask/:id', async(req, res) => {
    const id = await req.params.id
    try {
        const deletedTask = await Task.findByIdAndDelete(id)
        if (!deletedTask) {
            res.status(404).send('Not found id: ' + id)
        }
        res.send(deletedTask)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router