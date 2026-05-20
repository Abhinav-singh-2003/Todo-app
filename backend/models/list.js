const mongoose=require("mongoose");
const listSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    },
    list:[{
        type:mongoose.Types.ObjectId,
        ref:"user",
    }]
})

module.exports=mongoose.model("List",listSchema);



// mongoose is also used to create the schema and model for the database and we can use this model in other files by importing this file...