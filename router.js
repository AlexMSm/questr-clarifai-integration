const { getImagePrediction, getRPSPrediction } = require("./controller");

const router = require("express").Router();

router.get("/image", getImagePrediction);
router.get("/rps", getRPSPrediction);

module.exports = router;
