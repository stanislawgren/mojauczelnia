const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("chuj");
  console.log(req.headers);
  const token = authHeader && authHeader.split(" ")[1];

  console.log(token);

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "secretkeyappearshere", (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};
