const reviewModel = require("../models/review.model");

exports.add = async (req, res) => {
  console.log(req.body);

  const { user_id, academy_id, review, stars } = req.body;

  let result;
  try {
    result = reviewModel.add(user_id, academy_id, review, stars);
  } catch (error) {
    res.send({ status: "err", message: "SERVER_ERROR" });
  }

  res.send({ status: "OK" });
};

exports.get = async (req, res) => {
  console.log(req.query);

  let reviews = await reviewModel.getAll(req.query);

  console.log(reviews);

  res.send({ status: "OK", reviews: reviews });
};
