const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    console.log("hyy bou")
    res.send("<h3>hyy jii wait </h3>")
})

app.listen(3000,(()=>{
    console.log("Server is running on port http://localhost:3000");
}));