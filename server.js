let express = require("express");
let app = express();
const MongoClient = require("mongodb").MongoClient;

// let http = require('http').createServer(app);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

const uri = "mongodb+srv://arun:arun123@cluster0.epbul.mongodb.net/saifedb?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser : true});
let projectCollection;
let timeSeriesDataCollection;

const createProjectCollection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err){
      console.log("MonogoDB Connected")
    }
    else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  })
}

const createTimeSeriesDataCollection = (collectionName) => {
  client.connect((err, db) => {
    timeSeriesDataCollection = client.db().collection(collectionName);
    if (!err){
      console.log("MonogoDB Connected")
    }
    else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  })
}

const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
}

app.get('/api/projects', (req, res) => {
  getProjects((err, result) => {
    if(err) {
      res.json({statusCode: 400, message: err})
    }
    else{
      res.json({statusCode: 200, message: "Success", data: result})
    }
  })
})

const  getTimeSeriesData = (callback) => {
  timeSeriesDataCollection.find({}).toArray(callback);
}


app.get('/api/time-series-data', (req, res) => {
  getTimeSeriesData((err, result) => {
    if(err) {
      res.json({statusCode: 400, message: err})
    }
    else{
      res.json({statusCode: 200, message: "Success", data: result})
    }
  })
})

app.listen(port,()=>{
  console.log("Listening on port ", port);
  createProjectCollection("projects");
  createTimeSeriesDataCollection("time-series-data");
});

