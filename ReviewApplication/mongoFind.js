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
		collection.find().toArray(function(err,result){
			if(err){
				console.log(err);
			}
			else if(result.length){
				console.log(result);
			}else{
				console.log("no records found");
			}
			db.close();
		});
		// db.collection("berry").find({}).toArray(function(err,result){ // another way
		// 	if(err){
		// 		console.log(err);
		// 	}
		// 	console.log(result);
		// 	db.close();
		// });
		
	}
});