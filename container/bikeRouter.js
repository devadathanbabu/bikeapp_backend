const express=require("express")
const bikeModel=require("../model/bikeModel")
const router=express.Router()

router.post("/addbike",async(req,res)=>{
    let data=req.body
    let addbike=new bikeModel(data)
    let result=await addbike.save()
    res.json({
        status:"success"
    })
})


module.exports=router