const mongoose =require("mongoose")
const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
    },
    mark:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

const Notes = mongoose.model("notes_app",NoteSchema)
module.exports = Notes;