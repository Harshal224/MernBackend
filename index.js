const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const CustumerModel = require('./models/Custumer')
const partModel = require('./models/Parts')
const http = require('mongoose')

const port = 10000;




const app = express()
app.use(express.json())
app.use(cors({
    origin: 'https://shreesamatrh-front.onrender.com',
}));

mongoose.connect("mongodb+srv://harshalbankar2222:RZ2NDoCWu7hlQVtU@store-test-db2.1bpzl.mongodb.net/?retryWrites=true&w=majority&appName=store-test-db2");

app.post('/login',(req, res) => {
    const {email,password} = req.body;
    CustumerModel.findOne(req.body)
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("the passward is incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })

})

app.post('/',(req, res) => {
    CustumerModel.create(req.body)
    .then(custumers => res.json(custumers))
    .catch(err => res.json(err))

})

app.get('/getProducts', (req, res)=>{
    partModel.find()
    .then(Parts=>res.json(Parts))
    .catch(err=>res.json(err))
})

app.listen(3000, () => {
    console.log("server is running")
})
