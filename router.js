const { getImagePrediction, getRPSPrediction } = require("./controller");

const router = require("express").Router();

router.post("/image", getImagePrediction);
router.post("/rps", getRPSPrediction);

module.exports = router;
