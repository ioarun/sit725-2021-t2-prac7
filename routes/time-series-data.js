var express = require("express");
var router = express.Router();
var Controllers = require("../controllers");


router.get('/', (req, res) => {
    Controllers.timeSeriesDataController.getTimeSeriesData(res);

})

module.exports = router;