const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose")
const PORT = 3000;

const Todoroute = require("./routes/todoroute");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const DB = "mongodb+srv://Ravi01:Ravi01@cluster0.g6uewf4.mongodb.net/TodoDB?appName=Cluster0";

app.use("/", Todoroute);

mongoose.connect(DB)
    .then(() => {
        console.log("Mongodb is successfully connected")
        app.listen(PORT, () => {
            console.log(`Server is Starts on http://localhost:${PORT}`);
        })
    }).catch(err => {
        console.log("Error mongodb connection failed", err)
    })