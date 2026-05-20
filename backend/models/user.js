const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    email:{
        type:string,
        required:true,
    },
    password:{
        type:string,
        required:true,
    },
    username:{
        type:string,
    },
    list:[{
        type:mongoose.Types.objectId,
        Ref:"List",
    }]

    
});

module.exports=mongoose.model("user",userSchema);