const express = require("express");

let router = express.Router();
let auth = require("../controllers/auth.controller.js");
const authentication = require("./../middleware/authenticateToken.js");

router.post("/login", auth.login);

router.post("/register", auth.register);

router.get("/check_in", authentication.authenticateToken, auth.check_in);

router.put("/change_user_data", auth.change_user_data);

module.exports = router;
