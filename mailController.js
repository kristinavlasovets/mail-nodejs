const User = require("./models/User");
class mailController {
  async enter(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Enter error" });
    }
  }
  async getUsers(req, res) {
    try {
      res.json("server works");
    } catch (e) {}
  }
}

module.exports = new mailController();
