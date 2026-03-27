const express =  require("express")
const mongoose = require("mongoose")
const app = express();
const router = require("./routers/Register_login.js")
const DB_URL = "mongodb+srv://Ravi01:Ravi01@cluster0.g6uewf4.mongodb.net/student_management?appName=Cluster0"
const PORT = 3000
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/",router)
mongoose.connect(DB_URL)
.then(()=>{
    console.log("mongoose connected successfully ")
    app.listen(PORT,()=>{
        console.log(`server starts http://localhost:${PORT}`)
    })
})
.catch(error =>{console.error("Server error ",error)})
