let connection = require("../db.js");

const university = () => {};

university.get = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Academy WHERE academy_id = ?`,
      [id],
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

university.getUserAcademyId = (userId) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT academy_id FROM User_Academy WHERE user_id = ?`,
      [userId],
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

module.exports = university;