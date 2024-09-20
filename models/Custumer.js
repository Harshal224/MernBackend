const mongoose =require("mongoose")

const CustumerSchema =new mongoose.Schema({
    name: String,
    email: String,
    password: String

}

);

const CustumerModel =mongoose.model("custumers",CustumerSchema)
module.exports = CustumerModel;