const { Router } = require("express");
const { getUsers, register, login } = require("./Controllers/UserController");

const router = Router();

//User APIs
router.get("/users", getUsers);
router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
