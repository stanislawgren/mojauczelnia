const express = require("express");

let router = express.Router();
let review = require("../controllers/review.controller.js");
const authentication = require("./../middleware/authenticateToken.js");

router.post("/add", authentication.authenticateToken, review.add);

router.get("/get", review.get);

module.exports = router;
