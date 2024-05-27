const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authModel = require("../models/auth.model");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let token;

  let result;
  try {
    result = await authModel.login(email);
  } catch (err) {
    res.send({ status: "err" });
    return;
  }

  console.log(result);

  if (!bcrypt.compareSync(password, result.password)) {
    res.send({ status: "err", message: "INVALID_CREDENCIALS" });
    return;
  }

  delete result.password;

  try {
    token = jwt.sign(
      {
        userId: result.user_id,
        email: result.email,
      },
      "secretkeyappearshere",
      { expiresIn: "365d" }
    );
  } catch (err) {
    res.send({ status: "err", error: "JWT_ERR" });
    return;
  }

  res.status(200).send({ status: "OK", token: token, user: result });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const username = email.split("@")[0];

  passwordEnc = bcrypt.hashSync(password, 10);

  let reg;
  try {
    reg = await authModel.register(username, email, passwordEnc);
  } catch (err) {
    res.send({ status: "err" });
  }

  res.send({ status: "OK" });
};

exports.xd = (req, res) => {
  res.send({ status: "OK" });
};
