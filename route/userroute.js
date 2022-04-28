const auth = require("../middleware/auth")
const {createuser,getuser,putuser,deleteuser,getbyiduser} = require("../controller/usercontroller");
const {login} = require("../controller/logincontroller")
const usermodule = require("../db/userdb")
const route = require("express").Router();
//post
route.post("/insert",async function(req,res){
    try {
        const result = await createuser(req.body);
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
        
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})
//get
route.get("/get",auth,async function(req,res){
    try {
        const result1 = await getuser();
        if(result1.errors){
            res.status(404).json({errors:true,message:result1.message})
        }
        else{
            res.status(200).json({errors:false,data:result1.data})
        }

        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})
//put
route.put("/put/:id",async function(req,res){
    try {
        const id = req.params.id
        const result2 = await putuser(id,req.body);
        if(result2.errors){
            res.status(404).json({errors:true,message:result2.message});

        }
        else{
            res.status(200).json({errors:false,data:result2.data})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})

//delete
route.delete("/delete/:id",async function(req,res){
    try {
        const id = req.params.id
        const result3 = await deleteuser(id);
        if(result3.errors){
            res.status(404).json({errors:true,message:result3.message})
        }
        else{
            res.status(200).json({errors:false,data:result3.data})
        }
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})
//get by id
route.get("/get1/:id",async function(req,res){
    try {
        const id = req.params.id
        const result4 = await getbyiduser(id);
        if(result4.errors){
            res.status(404).json({errors:true,message:result4.message});
        }
        else{
            res.status(200).json({errors:false,data:result4.data})
        }

        
    } catch (error) {
        
        res.status(400).json({message:error.message})
    }
})

//login route
route.post("/login",async function(req,res){
    try {
        const result = await login(req.body);
        if(result.errors){
            res.status(404).json({errors:true,message:result.message})
        }
        else{
            res.status(200).json({errors:false,data:result.data})
        }
        
        
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
})



module.exports=route