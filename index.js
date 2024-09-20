const express = require("express")
const mongoose = require("mongoose")
const cors =require("cors")
const CustumerModel = require('./models/Custumer')
const partModel = require('./models/Parts')




const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/custumer");

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
