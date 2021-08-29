let Service = require("../services");

const getTimeSeriesData = (res) => {
    console.log('controller ')
    Service.TimeSeriesDataService.getTimeSeriesData(res); // this one is from services.
}

module.exports = {
    getTimeSeriesData
}