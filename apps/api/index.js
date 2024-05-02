const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const registerController = require("./registerController");
const loginController = require("./loginController");

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/register", registerController);

app.use("/login", loginController);

app.listen(port, () => {
  console.log(`Moja Uczelnia API is live on port: ${port}`);
});

let sql = require("./db.js");

sql.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("Database test: ", rows[0].solution);
});
