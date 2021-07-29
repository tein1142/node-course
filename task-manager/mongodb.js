// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId } = require('mongodb')

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

    // db.collection('users').find({ _id: new ObjectId("60feb5fece113616668dbda0") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fecth')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).toArray((error, user) => {
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('descriptions').findOne({ _id: new ObjectId("60feb10c4ba6cd5d3f8c96f8") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fecth')
    //     }
    //     console.log(user)
    // })

    db.collection('descriptions').find({ completed: false }).toArray((error, task) => {
        if (error) {
            return console.log('Unable to fecth')
        }
        console.log(task)
    })
})