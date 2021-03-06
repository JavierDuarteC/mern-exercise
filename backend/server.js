const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const uri = 'mongodb://mongodb:27017/mern_exercise'

mongoose.connect(uri, {
    useNewUrlParser: true, useCreateIndex: true
}).catch(err=>console.log('Error: '+err))

const connection = mongoose.connection
connection.once('open',()=>{
    console.log('MongoDB database connection established successfully')
})

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})