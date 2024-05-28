const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authModel = require("../models/auth.model");
const {signJwt} = require("../jwt/actions");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let token;

  let result;
  try {
    result = await authModel.login(email);
    if (!result) throw new Error(`Authentication failed`)
  } catch (err) {
    res.send({ status: "err" });
    return;
  }

  if (!bcrypt.compareSync(password, result.password)) {
    res.send({ status: "err", message: "INVALID_CREDENCIALS" });
    return;
  }

  delete result.password;

  try {
    token = signJwt(result.email, result.user_id)
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

  let user = await authModel.login(email)
  delete user.password;

  let token = signJwt(user.id);

  res.send({ status: "OK", token: token, user: user });
};

exports.check_in = async (req, res) => {
  let user = await authModel.login(req.user.email)
  delete user.password;
  res.send({ status: "OK", user: user });
};
