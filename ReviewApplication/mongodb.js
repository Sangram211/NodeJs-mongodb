var mongodb = require('mongodb');

var mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fruitdb";

mongoclient.connect(url, function(err,db){
	if(err){
		console.log(err);
	}
	else{
		console.log("connected to " +url)
		
		db.close();
	}
});