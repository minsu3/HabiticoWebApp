const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
const path = require('path')
const db = require("./db") // imported getDB, connect, getPrimaryKey
const collection = "habit"

// Enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')) //change the file path later  
})

app.get('/getList', (req,res)=> {
  db.getDB().collection(collection).find({}).toArray((err, documents) => {
    if(err) {
      console.log(err)
    } else {
      console.log(documents)
      res.json(documents)
    }
  })
})

app.put('/:id', (req, res) => {
  const habitID = req.params.id
  const userInput = req.body
 
  db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(habitID)}, {$set : {habit : userInput.habit}}, {returnOriginal : false},(err, result)=>{
    if(err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

app.post('/', (req, res) => {
  const userInput = req.body
  db.getDB().collection(collection).insertOne(userInput, (err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.json({result : result, document : result.ops[0]})
    }
  })
}) 

app.delete('/:id', (req, res) => {
  const habitId = req.params.id

  db.getDB().collection(collection).findOneAndDelete({_id: db.getPrimaryKey(habitId)}, (err, result)=> {
    if(err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

db.connect((err)=> {
  if(err) {
    console.log("unable to connect to database")
    console.log(err)
    process.exit(1)
  }
  else {
    app.listen(4000, ()=> {
      console.log('Connected to database! App listening on port 4000')
    })
  }
})