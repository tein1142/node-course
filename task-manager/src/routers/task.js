const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../midleware/auth')
router.post('/tasks', auth, async(req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        // const task = await new Task(req.body)
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

router.get(`/allTasks`, auth, async(req, res) => {
    try {
        // const tasks = await Task.find({ owner: req.user })
        await req.user.populate('tasks').execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/getTaskById/:id', auth, async(req, res) => {
    try {
        const taskById = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!taskById) {
            return res.status(404).send('Not found task with id: ' + id)
        }
        res.status(200).send(taskById)
    } catch (e) {
        res.send(e)
    }

    // Task.findById(id).then((task) => {
    //     res.send(task)
    // }).catch((e) => {
    //     res.send(e)
    // })
})

router.patch('/editTask/:id', auth, async(req, res) => {
    const keyInput = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidUpdate = keyInput.every((key) => {
        return allowedUpdates.includes(key)
    })
    if (!isValidUpdate) {
        return res.status(400).send("key or value went wrong!")
    }
    try {

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            return res.status('404').send("Not found id: " + id)
        }
        keyInput.forEach((key) => {
            task[key] = req.body[key]
        })
        task.save()
            // const updated = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/deleteTask/:id', auth, async(req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!deletedTask) {
            res.status(404).send('Not found id: ' + req.body.id)
        }

        res.send(deletedTask)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router