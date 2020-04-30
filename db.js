const MongoClient = require("mongodb").MongoClient
const ObjectID = require('mongodb').ObjectID
const dbname = "crud_mongodb"
const url = process.env.MONGODB_URI || "mongodb://localhost:27017"
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

const client = new MongoClient(url, mongoOptions);

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const state = {
  db : null // default - we dont have a datebase yet
}

const connect = (cb) => {
  if(state.db) {
    cb() // callback
  } else {
    MongoClient.connect(url, mongoOptions, (err, client) => {
      if(err) {
        cb(err)
      } else {
        state.db = client.db(dbname)
        cb()
      }
    })
  }
}

const getPrimaryKey = (_id) => {
  return ObjectID(_id)
}

const getDB = () => {
  return state.db
}

module.exports = { getDB, connect, getPrimaryKey }