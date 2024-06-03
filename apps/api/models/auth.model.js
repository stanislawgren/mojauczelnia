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
      `INSERT INTO User (user_name, email, password) VALUES (?, ?, ?);`,
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

auth.registerAcademy = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO User_Academy (user_id, academy_id) VALUES ((SELECT user_id FROM User WHERE email = ?), 1);`,
      [email, passwordEnc, email],
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

auth.change_user_data = (username, newPassword, email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      UPDATE User SET user_name = ?, password = ? WHERE email = ?;
      `,
      [username, newPassword, email],
      (err, res) => {
        if (err) {
          console.error("Database error:", err.message, err.code);
          reject("SERVER_ERROR");
        } else {
          resolve(res);
        }
      }
    );
  });
};

auth.change_user_academy_data = (academy_id, user_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `
      UPDATE User_Academy SET academy_id = ? WHERE user_id = ?;
      `,
      [academy_id, user_id],
      (err, res) => {
        if (err) {
          console.error("Database error:", err.message, err.code);
          reject("SERVER_ERROR");
        } else {
          resolve(res);
        }
      }
    );
  });
};



module.exports = auth;
