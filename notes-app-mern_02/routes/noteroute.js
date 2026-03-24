const express = require("express")
const route = express.Router();


console.log("router runing")
route.get("/",(req,res)=>{res.render("index")})


module.exports = route