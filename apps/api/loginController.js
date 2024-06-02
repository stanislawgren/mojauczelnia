const express = require("express");
const router = express.Router();
const connection = require("./db.js");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const query = "";

  connection.query(
    `SELECT password FROM User WHERE email = ?`,
    [email],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to register user" });
      }
      if (result.length > 0) {
        const qPassword = result[0].password;
        if (bcrypt.compareSync(password, qPassword)) {
          res.send(true);
        } else {
          res.send(false);
        }
      } else {
        res.status(404).json({ error: "User not found" });
      }
    }
  );
});

module.exports = router;
