const express = require ('express');

const mongoose = require('mongoose');
const router = require('./workout/workout');
require('dotenv').config()

const app = express()


app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

app.use('/api/workouts',router)

mongoose.connect(process.env.MONGO)
.then(() => {app.listen(process.env.PORT,() => {
    console.log('Port 4000')
})})
.catch((error) => {console.error();})



