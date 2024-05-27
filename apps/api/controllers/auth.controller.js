const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  let token;
  try {
    token = jwt.sign(
      {
        userId: 120,
        email: "example@example.pl",
      },
      "secretkeyappearshere",
      { expiresIn: "365d" }
    );
  } catch (err) {
    res.send({ status: "err", error: "JWT_ERR" });
  }

  res.status(200).send({ status: "OK", token: token, user: 120 });
};

exports.register = (req, res) => {
  res.send({ status: "OK" });
};

exports.xd = (req, res) => {
  res.send({ status: "OK" });
};
