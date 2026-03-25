const Notes = require("../models/Notemodule")
exports.getNotes = async (req, res) => {
    try {
        const note = await Notes
            .find()
            .sort({ mark: -1, createdAt: -1 }) //  key line
            .lean();

        res.render("index", { note });
    } catch (error) {
        console.error("Can't fetch data:", error);
        res.status(500).send("Server Error");
    }
};

exports.CreateNote = async (req, res) => {
    try {
        const { new_task } = req.body; // match input name

        if (!new_task) {
            return res.status(400).send("Note is required");
        }

        const newNote = await Notes.create({
            title: new_task,
        });

        res.redirect("/");
    } catch (error) {
        console.error("Error saving note:", error);
        res.status(500).send("Server Error");
    }
};

// toggle mark
exports.toggleMark = async (req, res) => {
    try {
        const note = await Notes.findById(req.params.id);

        if (!note) return res.status(404).send("Not found");

        note.mark = !note.mark; // toggle
        await note.save();

        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};