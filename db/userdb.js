const mongoose = require("mongoose");

const userschema = mongoose.Schema({
    Fname:{type:String,required:true},
    Lname:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    createdate:{type:Date,default:Date.now()},
    upadateDate:{type:Date,default:Date.now()}

})
module.exports = mongoose.model("userinfo",userschema);