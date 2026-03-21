const express = require("express");
const app = express();
const path = require("path");


// const Todoroute = require("./routes/todoroute")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(3000,(()=>{
    console.log("Server is running on port http://localhost:3000");
}));