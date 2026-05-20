const mongoose=require("mongoose");

const conn= async (req,res)=>{
   try {
     await mongoose.connect("mongodb+srv://user:abhinav%409311@cluster0.qnl3dut.mongodb.net/").then(()=>{
        console.log("connected");
    });
    
   } catch (error) {
    res.status(400).json({message: "not connected"});
    
   }
};

conn();


// mongoosse is used to connect the database and we can use this connection in other files by importing this file...