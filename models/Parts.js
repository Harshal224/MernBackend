const mongoose= require("mongoose")

const partSchema= new mongoose.Schema({
    Part_no: String,
    Description: String,
    MRP_per_unit: Number,
    After_7per_discount: Number
})

const partModel= mongoose.model("parts",partSchema)
module.exports= partModel