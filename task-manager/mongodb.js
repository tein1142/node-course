// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length)
console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Ratajit',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    //     db.collection('user').insertMany([{
    //         name: 'Nam',
    //         age: 21
    //     }, {
    //         name: 'Tien',
    //         age: 20
    //     }], (error, result) => {
    //         if (error) {
    //             return console.log('unable to insert documents!')
    //         }
    //         console.log(result.ops)
    //     })

    // db.collection('descriptions').insertMany([{
    //     description: 'node.js',
    //     completed: false
    // }, {
    //     description: 'Database SQL',
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })
})