const express = require('express')
const router = new express.Router()
const User = require('../models/user')
router.post('/users', async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.get(`/getAllUsers`, async(req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/getUserById/:id', async(req, res) => {
    const id = req.params.id
    try {
        const userById = await User.findById(id)
        if (!userById) {
            return res.status(404).send()
        }
        res.send(userById)
    } catch (e) {
        res.status(500).send()
    }

    // User.findById(id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.patch('/editUser/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        allowedUpdates.includes(update)
    })
    console.log(isValidOperation)
    if (!isValidOperation) {
        return res.status(404).send('Invalid updates!')
    }
    const id = req.params.id
    try {
        const userById = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!userById) {
            res.status(404).send('Not found id: ' + id)
        }
        userById.save()
        res.status(202).send(userById)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/deleteUser/:id', async(req, res) => {
    try {
        const id = await req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
        if (!deletedUser) {
            res.status(404).send("Not found id: " + id)
        }
        res.status(200).send(deletedUser)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router