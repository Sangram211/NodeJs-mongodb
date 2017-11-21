var mongodb = require('mongodb');

var mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/fruitdb";

mongoclient.connect(url, function(err,db){
	if(err){
		console.log(err);
	}
	else{
		console.log("connected to " +url)
		var collection = db.collection('berry');

		collection.update({"name" : "blackBerry"},{$set :{"color" : "black brown"}},function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log("row updated with new record");
			}
			db.close();
		});
		
		
		
	}
});