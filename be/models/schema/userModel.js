const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
userId : { type: String},
username: {type: String},
createAt: {type: Date, default: Date.now},
});

const User = mongoose.model("User", UserSchema);

module.exports = User;