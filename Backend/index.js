//require syntax is used before es-6 but now javascript updatye we have other options as well

//for this in package.json we write 
//"type":"module"
//import express from "express"
//import dotenv from "dotenv"

//before e-6 update of javascript we use this buy now we can also use import syntax 
// const express = require('express')
// const dotenv = require("dotenv")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/book_route.js"
import userRoute from "./route/user_route.js"

const app = express()
app.use(cors());

//this is the middleware
app.use(express.json())


dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// app.get('/', (req, res) => {
//   res.send('Book Store')
// })

//Connect to Mongodb
try{
    mongoose.connect(URI)
    console.log("Connected to MongoDb")
}catch(err){
 console.log("Error: ", err)
}

//defining route
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})