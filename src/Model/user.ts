const userSchema = require("../Schema/user.ts");
const { db } = require("../db");

const UserModel = db.model("user", userSchema);

module.exports = UserModel;
