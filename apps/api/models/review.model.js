let connection = require("../db.js");

const review = () => {};

review.add = (user_id, academy_id, review, stars) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO `Academy_Opinion` (`id`, `user_id`, `academy_id`, `review`, `stars`, `date`) VALUES (NULL, ?, ?, ?, ?, NOW());",
      [user_id, academy_id, review, stars],
      (err, res) => {
        if (err) {
          if (err.code == "ER_DUP_ENTRY") reject("ER_DUP_ENTRY");
          reject("SERVER_ERROR");
        } else {
          resolve(res[0]);
        }
      }
    );
  });
};

review.getAll = ({ academy_id }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      ` SELECT 
            ar.id AS review_id,
            ar.academy_id,
            ar.review,
            ar.stars,
            ar.date,
            u.user_id AS user_id,
            u.user_name AS user_name,
            u.email AS user_email,
            ua.academy_id AS user_academy
        FROM 
            Academy_Opinion ar
        INNER JOIN 
            User u ON ar.user_id = u.user_id
        join User_Academy ua on u.user_id = ua.user_id
        WHERE 
            ar.academy_id = 1`,
      [academy_id],
      (err, res) => {
        if (err) {
          if (err.code == "ER_DUP_ENTRY") reject("ER_DUP_ENTRY");
          reject("SERVER_ERROR");
        } else {
          resolve(res);
        }
      }
    );
  });
};

module.exports = review;
