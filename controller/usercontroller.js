
const bcrypt = require("bcrypt");

const uschema = require("../db/userdb");

exports.createuser = async (user)=>{
    try {
        //email duplication avoid
        const emailExits = await uschema.findOne({Email:user.Email});
        if(emailExits){
            return {errors:true,message:"email already exist"}

        }
        //password encryption
        let salt = await bcrypt.genSalt(10)
        const encryptPassword = await bcrypt.hash(user.Password,salt)
        const users = await new uschema({Fname:user.Fname,Lname:user.Lname,Email:user.Email,Password:encryptPassword});
        const data = await users.save();
        return {errors:false,data:data}
        
    } 
    catch (error) {
        return {errors:true,messsage:error.messsage}
        
    }
}

//get user

exports.getuser = async ()=>{
    try {
        const data1 = await uschema.find();
        return {errors:false,data:data1}
        
    } catch (error) {
        return {errors:true,messsage:error.messsage}
        
    }
}

//put user

exports.putuser = async (id,user)=>{
    try {
        const data2 = await uschema.findByIdAndUpdate(id,user,{new:true})
        return {errors:false,data:data2}

        
    } catch (error) {
        return {errors:true,messsage:error.messsage}
        
    }
}

//delete user
exports.deleteuser =  async (id)=>{
    try {
        const data3 = await uschema.findByIdAndDelete(id)
        return {errors:false,data:"record deleted"}
        
    } catch (error) {
        return {errors:true,messsage:error.messsage}
        
    }
}


//get by id
exports.getbyiduser = async (id)=>{
    try {
        const data4 = await uschema.findById(id)
        return {errors:false,data:data4}

        
    } catch (error) {
        return {errors:true,messsage:error.messsage}
        
    }
}