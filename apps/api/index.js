const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
let router = express.Router();

var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authRoute = require("./routes/auth");
const searchRoute = require("./routes/search");
const universityRoute = require("./routes/university");
const reviewsRoute = require("./routes/review");

app.listen(port, () => {
  console.log(`Moja Uczelnia API is live on port: ${port}`);
});

app.use("/auth", authRoute);
app.use("/search", searchRoute);
app.use("/university", universityRoute);
app.use("/review", reviewsRoute);

let sql = require("./db.js");

sql.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("Database test: ", rows[0].solution);
});
