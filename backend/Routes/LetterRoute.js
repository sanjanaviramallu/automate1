//1. import express
const express=require("express")
const { appendOrCreateLetterWithDynamicFields } = require("../Models/LetterModel")

//2. create router
const router=express.Router()

//3. write the routes
router.post('/add-letter',appendOrCreateLetterWithDynamicFields)

//4. export
module.exports=router