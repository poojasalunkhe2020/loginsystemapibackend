require("dotenv/config");

const mongoose = require("mongoose");
const express = require("express");
const user = require("./route/userroute")
const app = express()
app.use(express.json())

app.get("/",function (req,res){
    res.send("Authentication API")
});

app.use("/user",user)

app.listen(process.env.PORT || 8080);


mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true},function(){
    console.log("db coonnect");
});
