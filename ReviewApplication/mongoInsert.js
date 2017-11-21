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
		var doc1={name : 'blueBerry', color :'blue'};
		var doc2={name : 'blackBerry', color :'black'};
		collection.insert([doc1,doc2],function(err,result){
			if(err){
				console.log(err);
			}
			else{
				console.log(" row inserted"+ result.insertedCount);
			}
			db.close();
		});
		
	}
});