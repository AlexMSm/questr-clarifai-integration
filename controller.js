const { fetchImagePrediction, fetchRPSPrediction } = require("./model");

exports.getImagePrediction = (req, res, next) => {
  const { body } = req;
  fetchImagePrediction(body.body).then((predictions) => {
    //console.log(predictions);
    res.status(200).send(predictions);
  });
};

exports.getRPSPrediction = (req, res, next) => {
  const { body } = req;
  fetchRPSPrediction(body.body).then((predictions) => {
    //console.log(predictions);
    res.status(200).send(predictions);
  });
};
