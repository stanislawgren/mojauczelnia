const searchModel = require("../models/search.model");

exports.cities = async (req, res) => {
  let cities;

  try {
    cities = await searchModel.getCitites();
  } catch (error) {
    res.send({ status: "err", message: "SERVER_ERROR" });
  }

  res.status(200).send({ status: "OK", cities: cities });
};

exports.academies = async (req, res) => {
  const { schools, cities } = req.query;

  let result;

  try {
    result = await searchModel.searchAcademy(schools, cities);
  } catch (error) {
    res.send({ status: "err", message: "SERVER_ERROR" });
  }

  if (schools == "" && cities == undefined) result = [];

  res.status(200).send({ status: "OK", academies: result });
};

exports.allAcademies = async (req, res) => {
  const { schools, cities } = req.query;

  let result;

  try {
    result = await searchModel.searchAcademy(schools, cities);
  } catch (error) {
    res.send({ status: "err", message: "SERVER_ERROR" });
  }
  
  res.status(200).send({ status: "OK", academies: result });
};