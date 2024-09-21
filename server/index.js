const express= require('express')
const mongoose= require('mongoose')


const app= express()
mongoose.connect("mongodb://localhost:27017/crud")

const UserSchema= new mongoose.Schema({
    name: String,
    age: Number
})

const UserMode1= mongoose.model("users",UserSchema)

app.get("/getUsers", (req,res)=>{
    UserMode1.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("Server is Running")
})