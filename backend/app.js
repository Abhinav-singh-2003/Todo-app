const express=require('express');
const app=express();
require("./conn/conn");

app.get("/", (req,res)=>{
    res.send("Hello");
});

app.listen(1000,()=>{
    console.log("server started");
});










//  express is used to create the server and we can use this server in other files by importing this file...