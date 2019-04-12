const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('./public'))

//app.use(morgan('short'))

const router = require('./routes/user.js')


app.use(router)

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello from Sarse Tech")
})

// localhost:3002
app.listen(3002, function(req,res) {
  console.log("Server is up and listening on 3002...")
})
