const express = require('express')
const router = new express.Router()
const User = require('../models/user')
    // const bcrypt = require('bcrypt')
router.post('/users', async(req, res) => {
    try {
        const user = await new User(req.body)
        const token = await user.generrateAuthToken()
        await user.save()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

router.post('/users/login', async(req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
            // console.log(user.password)
        const token = await user.generrateAuthToken()
            // console.log("token: " + token)
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
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
        return allowedUpdates.includes(update)
    })
    console.log(isValidOperation)
    if (!isValidOperation) {
        return res.status(404).send('Invalid updates!')
    }
    const id = req.params.id
    try {
        const user = await User.findById(id)

        updates.forEach((update) => {
            user[update] = req.body[update]
        })
        user.save()
            // const userById = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!user) {
            res.status(404).send('Not found id: ' + id)
        }

        res.status(202).send(user)
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