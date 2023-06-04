const mongoose=require("mongoose");


const adminSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetToken:String,
    resetTokenDate:Date,
    auth:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Admin",adminSchema)