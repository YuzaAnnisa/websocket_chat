const {addUser: coreAddUser} = require("./core/user.core")

const addAuser = async (req, res, next) => {
    const { userId, username } = req.body;
    try {
      const user = await coreAddUser(userId, username);
      res.json({ id: req.requestId, user });
    } catch (e) {
      next(e);
    }
  };

module.exports = {
    addAuser,
}