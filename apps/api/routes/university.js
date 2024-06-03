const express = require("express");

let router = express.Router();

let university = require("../controllers/university.controller.js");

router.get("/:universityId", university.get);

module.exports = router;
