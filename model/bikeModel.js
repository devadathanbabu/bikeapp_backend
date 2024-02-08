const mongoose=require("mongoose")
const bikeSchema=new mongoose.Schema(
    {
        name:String,
        model:String,
        yearofmanu:String,
        cc:String
    }
)
module.exports=mongoose.model("bike",bikeSchema)