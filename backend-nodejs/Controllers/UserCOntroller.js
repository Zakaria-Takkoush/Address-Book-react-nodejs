const User = require("../Models/User");

async function getUsers(req, res) {
  const result = await User.find();
  return res.json(result);
  console.log(result);
}

module.exports = {
  getUsers,
};
