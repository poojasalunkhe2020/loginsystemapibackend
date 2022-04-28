const usschema = require("../db/userdb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); //jsonwebtoken require

//login 
exports.login = async (user)=>{
    try {
        const users = await usschema.findOne({Email:user.Email});
        if(!users){
            return {errors:true,message:"Emalil or password invalid"};
        }
        
        const passwordexist = await bcrypt.compare(user.Password,users.Password);
        if(!passwordexist){
            return {errors:true,message:"Email or Password invalid"}

        }
        const token = await jwt.sign({_id:users._id},process.env.SEC)
        return {errors:false,data:{token:token,user:users}}
        
    } catch (error) {
        return {errors:true,message:error.message}
        
    }

}

