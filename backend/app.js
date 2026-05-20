const express=require('express');
const app=express();
require("./conn/conn");
const auth=require("./routes/auth");
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Hello abhinav engineer");
});
app.use("/api/v1",auth);

app.listen(1000,()=>{
    console.log("server started");
});










//  express is used to create the server and we can use this server in other files by importing this file...