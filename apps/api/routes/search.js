const express = require("express");

let router = express.Router();
let search = require("../controllers/search.controller.js");

router.get("/cities", search.cities);

router.get("/academies", search.academies);

module.exports = router;
