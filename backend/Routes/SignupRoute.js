const express=require("express")
const {signup}=require("../Controllers/SignupController")

const router=express.Router()
router.post("/",signup)

module.exports=router