// const express = require("express");
// const app = express();
// const path = require("path");


// const Todoroute = require("./routes/todoroute")


// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(express.urlencoded({extended:true}))

// console.log("jii haa kya baat hai")
// app.use("/",Todoroute)

// app.listen(3000,(()=>{
//     console.log("Server is running on port http://localhost:3000");
// }));


const express = require("express");
const app = express();
const path = require("path");

const Todoroute = require("./routes/todoroute");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// ✅ Correct way to use router
app.use("/", Todoroute);

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});