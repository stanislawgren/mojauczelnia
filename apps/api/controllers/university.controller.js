const universityModel = require("../models/university.model");

exports.get = async (req, res) => {
  let university = await universityModel.get(req.params.universityId)
  res.send({ status: "OK", data: university });
};
