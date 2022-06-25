const express = require("express");
const Room = require("../models/schema/roomModels");
const app = express();

app.get("/rooms/", async (request, response) => {
    const users = await Room.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.post("/add_room/", async (request, response) => {
    const user = new Room(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

  module.exports = app;