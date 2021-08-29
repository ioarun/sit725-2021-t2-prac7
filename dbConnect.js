const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://arun:arun123@cluster0.epbul.mongodb.net/saifedb?retryWrites=true&w=majority"
const client = new MongoClient(uri, {useNewUrlParser : true});


client.connect((err,db) => {
     if(!err){
       console.log('Database Connected');
     }else{
       console.log('[error]',err);
       process.exit(1);
     }
 });

 exports.mongoClient = client;