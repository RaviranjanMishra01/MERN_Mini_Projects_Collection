const express = require("express")
const route = express.Router();
const todocontroller = require("../controllers/todocontrollers")

console.log("jii haa kya baat hai no:1 ")

route.get("/",todocontroller.getTodo);
route.post("/submit",todocontroller.createTodo);

module.exports = route;