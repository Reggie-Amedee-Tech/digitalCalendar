const UserModel = require("../controller/user.controller");

module.exports = function(app) {
    app.post("/api/user/registerUser", UserModel.register)
    app.post("/api/user/loginUser", UserModel.login)
    app.post("/api/user/logout", UserModel.logout)
}