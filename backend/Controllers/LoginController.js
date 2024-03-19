const Signup=require("../Models/SignupModel")


const login=async (req,res)=>{
    try
    {
        const {email,password}=req.body;
    const existingUser=await Signup.findOne({"email":email})
    if(existingUser)
    {
        if(password==existingUser.password)
        {
            //return res.send({message:"sucessful"})
            return res.status(200).json({message:"sucessful"})
        }
        else
        {
            return res.send({message:"invalid password"})
        }
    }
    return res.send({message:"not registered"})
}
catch(error)
{
    res.status(500).json({error:error})
}
}
    


module.exports={login}