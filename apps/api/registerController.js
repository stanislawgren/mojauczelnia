const express = require("express");
const router = express.Router();
const connection = require("./db.js");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const username = email.split("@")[0];

  passwordEnc = bcrypt.hashSync(password, 10);

  const query = "INSERT INTO User (user_name, email, password) VALUES (?, ?, ?)";

  connection.query(query, [username, email, passwordEnc], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to register user" });
    }
    res.send(true);
  });
});

module.exports = router;
