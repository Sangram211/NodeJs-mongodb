var fs= require('fs');
var queryString = require('querystring');

function home(response){
	var htmlhome="";
	console.log("this is inside home method router");
	fs.readFile("./home.html",function(err,data){
		if(err){console.log(err)}
		else{
			console.log("dat--"+ data)
			//htmlhome=data;
		response.writeHead(200,{"Content-Type" : "text/html"});
		response.write(data);
		response.end();
		}
	})
	// var htmlhome='<html>'+
	// '<head>'+
	// '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
	// '</head>'+
	// '<body>'+
	// '<form action="/review" method="post">'+
	// '<textarea name="text" rows="20" cols="60"></textarea>'+
	// '<input type="submit" value="Submit text" />'+
	// '</form>'+
	// '</body>'+
	// '</html>';

	

}

function review(response,reviewData){
	console.log("this is inside review method router");

		response.writeHead(200,{"Content-Type" : "text/plain"});
		response.write("review Data--" + queryString.parse(reviewData).text);
		response.end();
}

exports.home = home;
exports.review = review;