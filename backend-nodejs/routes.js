const { Router } = require("express");
const { getUsers, register } = require("./Controllers/UserController");

const router = Router();

//User APIs
router.get("/users", getUsers);
router.post("/auth/register", register);

module.exports = router;
