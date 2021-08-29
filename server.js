let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");
// routes
let projectsRoute = require('./routes/projects');
let timeSeriesDataRoute = require('./routes/time-series-data');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));


app.use('/api/projects', projectsRoute);

app.use('/api/time-series-data', timeSeriesDataRoute);



app.listen(port,()=>{
  console.log("Listening on port ", port);
});

