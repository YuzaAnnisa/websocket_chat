const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
roomId : { type: String},
roomName: {type: String},
createAt: {type: Date, default: Date.now},
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;