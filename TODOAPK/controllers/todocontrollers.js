const Todo = require('../models/Todo');


exports.getTodo = (req,res)=>{
    console.log("jii haa kya baat hai 2")

    res.render("home")
}

exports.createTodo = (req,res)=>{
    const {Work} = req.body;
    console.log(req.body)
    Todo.create({Work})
    res.render("home")
}