const express = require("express")
const app = express();
const mongoose = require("mongoose")
const Route = require("./routes/noteroute")
const DB_URL = "mongodb+srv://Ravi01:Ravi01@cluster0.g6uewf4.mongodb.net/?appName=Cluster0"

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))


app.use("/", Route)

mongoose.connect(DB_URL)
    .then(() => {
        const PORT = 3000
        console.log("Mongodb connected")
        app.listen(PORT, () => {
            console.log(`Server is Starts on http://localhost:${PORT}`)
        })
    })
    .catch(err => {
        console.log("Error mongodb connection failed", err)
    })