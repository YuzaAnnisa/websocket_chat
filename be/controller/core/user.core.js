const { getUser } = require("../../models/user.model");

const addUser = async(userId, username) =>{
    try{
        const data  = await getUser(userId,username)
        return data
    }catch(e){
       return(e)
    }
}

module.exports = {addUser}