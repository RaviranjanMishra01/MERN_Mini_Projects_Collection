const express = require("express")
const route = express.Router();
const note_control = require("../Controller/notes_controller.js")


console.log("router runing")
route.get("/",note_control.getNotes)
route.post("/addnote",note_control.CreateNote)
route.post("/note/:id/toggle", note_control.toggleMark);


module.exports = route