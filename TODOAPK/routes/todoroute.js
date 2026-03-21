const express = require("express")
const route = express.Router();
const todocontroller = require("../controllers/todocontrollers")

route.get("/",todocontroller.getTodo);