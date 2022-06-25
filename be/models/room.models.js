const Room = require("./schema/roomModels")

const getAroom = async (roomId,roomName) => {
    return new Promise((res, rej) => {
      const data = {
        roomId: roomId,
        roomName: roomName
    }
        const searchQuery = {
            roomName: `${roomName}`,
        };
        Room.findOne(searchQuery)
          .then((room) => {
            if (!room) {
              Room.create(data, function (err, doc) {
                if (err) reject(err);
                res("berhasil buat data");
              });
            }else{
              rej("data has been used", room)
            }
            res(room);
        })
          .catch((err) => {
            rej("Database error");
        });
    });
}

const addNewRoom = async (roomId, roomName)=>{
    return new Promise((resolve, reject) => {
        const data = {
            roomId: roomId,
            roomName: roomName
        }
        Room.create(data, function (err, doc) {
          if (err) reject(err);
          resolve(doc);
        });
    });
}

module.exports ={
    getAroom,
    addNewRoom
}