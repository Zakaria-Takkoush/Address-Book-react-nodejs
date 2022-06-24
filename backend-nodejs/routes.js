const { Router } = require("express");
const { getUsers } = require("./Controllers/UserController");

const router = Router();

//User APIs
router.get("/users", getUsers);

module.exports = router;
