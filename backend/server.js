const express = require("express")
const connectdb = require("./config/db")
const cors=require("cors")
const bodyParser=require("body-parser")
const SignupRoute=require("./Routes/SignupRoute")
const LoginRoute=require("./Routes/LoginRoute")
const port = 8000
connectdb()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/signup",SignupRoute)
app.use("/login",LoginRoute)
app.use("/letters",require("./Routes/LetterRoute"))

//DB connection function call

app.listen(port,()=>{
    console.log(`server is running on ${port}`)

})