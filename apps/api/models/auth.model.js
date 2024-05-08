let connection = require("../db.js");

const auth = () => {};

auth.login = (username, email, passwordEnc) => {
  const query =
    "INSERT INTO User (user_name, email, password) VALUES (?, ?, ?)";
  return new Promise((resolve, reject) => {
    connection.query(query, [username, email, passwordEnc], (err, result) => {
      if (err) {
        console.error(err);
        reject({ error: "Failed to register user" });
      }
      resolve(true);
    });
  });
};
