const { getAroom } = require("../../models/room.models");

const addRoom = async(roomId, roomName) =>{
    try{
        const data  = await getAroom(roomId, roomName)
        return data
    }catch(e){
        return e
    }
}

  module.exports = {addRoom}