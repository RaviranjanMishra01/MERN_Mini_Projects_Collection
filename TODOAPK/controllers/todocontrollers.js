const Todo = require('../models/Todo');

exports.getTodo =async (req, res) => {
    try{
        const todos = await Todo.find().lean(); //find data
        res.render("home",{todos}) // pass ejs
    }catch(error){
        console.error("error")
        res.status(500).send("Error fetching todos")
    } 
};

exports.createTodo = async (req, res) => {
    try {
        console.log(req.body);

        const { Work } = req.body; 

        const newTODO = await Todo.create({
            title: Work,
        });

        console.log("Saved:", newTODO);

        res.redirect("/"); 
    } catch (error) {
        console.error("Error saving todo", error);
        res.status(500).send("Server Error");
    }
};

exports.deleteTodo = async (req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id) // find and delete
        res.redirect("/")
    }catch(error){
        console.error(error);
        res.status(500).send("Delete error")
    }
}

exports.toggleTodo = async(req,res) =>{
    try {
        const todo =  await Todo.findById(req.params.id)  //find data using dynamic id
        todo.completed = !todo.completed;
        await todo.save();
        res.redirect("/")
    }catch(error){
        console.error(error)
        res.status(500).send("Toggle error")
    }
}