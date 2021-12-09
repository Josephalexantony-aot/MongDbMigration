const express = require('express')
const app = express()

app.use(express.json())
const ResourseRouter = require('./routes/MainRout')
app.use('/', ResourseRouter)

app.listen(9000, ()=>{
    console.log("server started..");
})
