//always have asyn functions
//2 parameters "req" and "res"
//you write logic in the controller
//write it in try catch block



//1. import the model(schema)
const letterModel=require("../Models/LetterModel.js")



//2. write asyc function with req and res. try catch block
const createLetter=async (req,res)=>{
    try{
        const letter=req.body
        //complete input from frontend is stored into the letter variable

        //send it to the DB
        const newLetter=new letterModel(letter)
        //to store it in DB
        await newLetter.save()
        res.status(200).json({
            message:"Sucessfully created the letter",
            success:true,
            newLetter
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in creation",
            error
        })
    }
}



//3. export async function
module.exports={createLetter}