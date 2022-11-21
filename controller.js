const { fetchImagePrediction, fetchRPSPrediction } = require("./model");

exports.getImagePrediction = (req, res, next) => {
  const { body } = req;
  console.log("general image", body);
  fetchImagePrediction(body.body).then((predictions) => {
    res.status(200).send(predictions);
  });
};

exports.getRPSPrediction = (req, res, next) => {
  const { body } = req;
  console.log("rps", body);
  fetchRPSPrediction(body.body).then((predictions) => {
    res.status(200).send(predictions);
  });
};
