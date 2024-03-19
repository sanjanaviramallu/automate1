const Signup=require("../Models/SignupModel")
// function signup(req,res){
//     const {email,password}=req.body.data;
//     const existingUser=Signup.find({"email":email})
//     if(existingUser){
//         return res.send({message:"Email already exists"})
//     }
//     const newSchema=new Signup({
//         "email":email,
//         "password":password
//     }
//     )
//     newSchema.save()
//     return res.send({message:"sucessful"})
// }

const signup = async (req,res) =>{
    const {email,password}=req.body;

    const existingUser=await Signup.findOne({"email":email})
    console.log(existingUser);
    if(existingUser){
        return res.send({message:"Email already exists"})
    }
    const newSchema=new Signup({
        "email":email,
        "password":password
    }
    )
    newSchema.save()
    return res.send({message:"sucessful"})
}

module.exports={signup}