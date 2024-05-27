const express = require("express");

let router = express.Router();
let auth = require("../controllers/auth.controller.js");
const authentication = require("./../middleware/authenticateToken.js");

router.post("/login", auth.login);

router.post("/register", auth.register);

router.post("/xd", authentication.authenticateToken, auth.xd);

module.exports = router;
