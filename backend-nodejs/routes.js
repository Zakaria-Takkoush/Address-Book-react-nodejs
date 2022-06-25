const { Router } = require("express");
const { addContact } = require("./Controllers/ContactsController");
const { getUsers, register, login } = require("./Controllers/UserController");

const router = Router();

// User APIs
router.get("/users", getUsers);
router.post("/auth/register", register);
router.post("/auth/login", login);

// Contacts
router.post("/add_contact", addContact);

module.exports = router;
