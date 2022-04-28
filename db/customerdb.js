const mongoose = require("mongoose");
const custschema = mongoose.model({
    Cname:{type:String,required:true},
    Address:{type:String},
    Email:{type:String},
    createddate:{type:Date,default:Date.now()},
    updatedte:{type:Date,default:Date.now()}
});


module.exports = mongoose.model("customerinfor",custschema);