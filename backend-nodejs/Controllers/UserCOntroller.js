const User = require("../Models/User");
const bcrypt = require("bcryptjs"); // import bcrypt
const jwt = require("jsonwebtoken"); // import jwt
const TOKEN_SECRET = process.env.TOKEN_SECRET || ""; // use token sectret

// Get Users
async function getUsers(req, res) {
  try {
    console.log(req.query);
    const result = await User.find();
    // console.log(result);
    return res.send(result);
  } catch (error) {
    console.log(error);
  }
}

// Register // Add user
async function register(req, res) {
  try {
    console.log(req.body);
    const salt = await bcrypt.genSalt(10); // set up bcrypt salt of 10
    // set the hashed passowrd
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    // set the body request parameters
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
    });
    const addUserResult = await user.save();
    console.log("addUserResult =>", addUserResult);
    return await res.send({
      message: "User added successfully",
      user_id: addUserResult._id,
    });
  } catch (error) {
    console.log(error);
    return await res.send({
      Error: error,
    });
  }
}

//Login
async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: "Invalid Credentials" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).json({ error: "Invalid Credentials" });

    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      TOKEN_SECRET,
      {
        expiresIn: "2h", // expiry of token
      }
    );

    return res.header("auth-token", token).send({ token });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

// Export functions
module.exports = {
  getUsers,
  register,
  login,
};
