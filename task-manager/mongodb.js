// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId, Db } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
    // console.log(id.id.length)
    // console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    //how to update
    //     db.collection('users').updateOne({
    //         _id: new ObjectId("60feb5ddefe159f3145545eb")
    //     }, {
    //         $inc: {
    //             age: 1
    //         }
    //     }).then((result) => {
    //         console.log(result)
    //     }).catch(err => {
    //         console.log(err)
    //     })

    //Challenge
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, ).then((resolve) => {
    //     console.log(resolve)
    // }).catch((reject) => {
    //     console.log(reject)
    // })


    //how to delete
    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((reject) => {
    //     console.log(reject)
    // })

    //challenge
    // db.collection('tasks').deleteMany({
    //     description: 'Database SQL'
    // }).then((resolve) => {
    //     console.log(resolve)
    // }).catch((reject) => {
    //     console.log(reject)
    // })

    db.collection('tasks').deleteOne({
        description: 'node.js'
    }).then((resolve) => {
        console.log(resolve)
    }).catch((reject) => {
        console.log(reject)
    })
})