const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app  = express()
const tasksRoute = require("./routes/tasks");
app.use("/api/tasks", tasksRoute);


app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000 ;

app.get("/" ,(req,res) => {
    res.send("Backend is Running")
})

// connecting mongoose to backend 
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected "))
.catch(err => console.error("MongoDB connection error ", err));


app.listen(PORT ,()=>{
    console.log('server running on port ${PORT}')
})