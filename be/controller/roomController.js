const {addRoom:coreAddRoom} = require("./core/room.core")

const addARoom = async (req, res, next) => {
    const { roomId, roomName } = req.body;
    try {
      const room = await coreAddRoom(roomId, roomName);
      res.json({ id: req.requestId, room });
    } catch (e) {
      next(e);
    }
  };

module.exports = {
    addARoom,
}