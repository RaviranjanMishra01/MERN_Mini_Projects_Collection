const express = require("express")
const app = express();
const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://Ravi01:Ravi01@cluster0.g6uewf4.mongodb.net/blogdemo?appName=Cluster0"


app.use("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))
app.set(express.static("public"))


app.use("/", (req, res) => {
    res.send("hyy ravi")
})

mongoose.connect(DB_URL)
    .then(() => {
        console.log("mongoose connected")
        app.listen(3000, () => {
            console.log("hyy ravi how can i help you")
        })
    })
    .catch(err => console.log("server error ",err))
    