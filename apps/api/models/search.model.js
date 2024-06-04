let connection = require("../db.js");

const search = () => {};

search.getCitites = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT DISTINCT city FROM Academy`,
      [email],
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

search.searchAcademy = (search, cities) => {
  let citiesFilter = "";

  if (!search) search = "";
  else search = "WHERE LOWER(academy_name) LIKE LOWER('%" + search + "%')";
  if (!cities == [])
    if (search != "")
      citiesFilter =
        "AND city IN ('" +
        cities.map((nazwa) => nazwa.toLowerCase()).join("', '") +
        "')";
    else {
      citiesFilter =
        "WHERE city IN ('" +
        cities.map((nazwa) => nazwa.toLowerCase()).join("', '") +
        "')";
    }

  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM Academy ${search} ${citiesFilter};`,
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

module.exports = search;
