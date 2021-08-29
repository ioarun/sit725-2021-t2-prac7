let client = require("../dbConnect");
let timeSeriesDataCollection;


setTimeout(() => {
    timeSeriesDataCollection = client.mongoClient.db("saifedb").collection("time-series-data");

}, 2000)

const getTimeSeriesData = (res) => {
    timeSeriesDataCollection.find().toArray(function (err, result) {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message: "Success", data: result})
        }
    })
}

module.exports = {
    getTimeSeriesData
}