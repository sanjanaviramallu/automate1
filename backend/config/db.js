const mongoose=require('mongoose')
require("dotenv").config()

const connectdb=async (req,res)=>{
    try {
        //Logic
        const connect=await mongoose.connect(process.env.MONGOURI)
        console.log("MongDB connected sucessfully")

    } catch (error) {
        //error
        console.log("There is an eroor")
        console.log(error)
    }
}
module.exports=connectdb