const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../midleware/auth')
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
        res.status(400).send('Email or Password is wrong!')
    }
})

// do it my self
// router.post('/users/logout', async(req, res) => {
//     try {
//         const user = await User.findByCredentials(req.body.email, req.body.password)
//         await user.deleteAuthToken()
//         res.send('Logout!')
//     } catch (e) {
//         res.send(e)
//     }
// })

router.post('/users/logout', auth, async(req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
                return token.token !== req.token
            })
            // console.log(req.user.tokens)
            // console.log(req.token)
        await req.user.save()

        res.send('Logout successful!')
    } catch (e) {
        res.status(500).send(e)
    }
})
router.post('/users/logoutAll', auth, async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.status(200).send('Logout All!')
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get(`/getAllUsers`, auth, async(req, res) => {
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
router.get('/users/me', auth, (req, res) => {
    // console.log(req.user)
    res.send(req.user)
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

router.patch('/editUser/me', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    console.log(isValidOperation)
    if (!isValidOperation) {
        return res.status(404).send('Invalid updates!')
    }
    // const id = req.params.id
    try {
        // const user = await User.findById(req.user)
        updates.forEach((update) => {
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.status(202).send(req.user)
            // const userById = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    } catch (e) {
        res.status(500).send('fail')
    }
})

router.delete('/deleteUser/me', auth, async(req, res) => {
    try {

        // const deletedUser = await User.findByIdAndDelete(req.user._id)
        // if (!deletedUser) {
        //     res.status(404).send("Not found id: " + id)
        // }
        await req.user.remove()
        res.status(200).send(req.user)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router