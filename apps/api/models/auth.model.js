let connection = require("../db.js");

const auth = () => {};

auth.login = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM User WHERE email = ?`,
      [email],
      (err, res) => {
        if (err) {
          reject("SERVER_ERROR");
        } else {
          resolve(res[0]);
        }
      }
    );
  });
};

auth.register = (username, email, passwordEnc) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO User (user_name, email, password) VALUES (?, ?, ?)`,
      [username, email, passwordEnc],
      (err, res) => {
        if (err) {
          reject("SERVER_ERROR");
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports = auth;
