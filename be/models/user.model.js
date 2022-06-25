const User = require("./schema/userModel")

const getUser = async (userId,username) => {
    return new Promise((res, rej) => {
      const data = {
        userId : userId,
        username : username
      }
        const searchQuery = {
            username: `${username}`,
        };
        User.findOne(searchQuery)
          .then((user) => {
            if (!user) {
              User.create(data, function (err, doc) {
                if (err) reject(err);
                res("berhasil buat data");
              });
            }else{
              rej("data has been used", user)
            }
        })
          .catch((err) => {
            rej("Database error");
        });
    });
}


module.exports ={
    getUser,
    
}