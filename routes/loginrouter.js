const express = require("express");
const loginrouter = express.Router();
const login = require("../controllers/logincontroller")
loginrouter.post("/login", login.logincontroller.login)

module.exports = loginrouter;