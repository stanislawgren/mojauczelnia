const jwt = require("jsonwebtoken");
const {verifyJwt} = require("../jwt/actions");

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  
  if (token == null) return res.sendStatus(401);

  verifyJwt(token, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;

    next();
  })
};
